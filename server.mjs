import { createServer } from "node:http";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const port = Number(process.env.PORT || 8080);
const rootDir = dirname(fileURLToPath(import.meta.url));
const dataDir = join(rootDir, "data");
const statePath = join(dataDir, "shoot-state.json");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".svg": "image/svg+xml",
};

async function readRequestBody(request) {
  const chunks = [];

  for await (const chunk of request) {
    chunks.push(chunk);
  }

  return Buffer.concat(chunks).toString("utf8");
}

async function sendJson(response, status, data) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  response.end(JSON.stringify(data));
}

async function handleStateApi(request, response) {
  if (request.method === "GET") {
    try {
      const text = await readFile(statePath, "utf8");
      await sendJson(response, 200, JSON.parse(text));
    } catch {
      await sendJson(response, 200, null);
    }
    return;
  }

  if (request.method === "PUT") {
    try {
      const body = await readRequestBody(request);
      const parsed = JSON.parse(body);
      await mkdir(dataDir, { recursive: true });
      await writeFile(statePath, JSON.stringify(parsed, null, 2));
      await sendJson(response, 200, { ok: true });
    } catch {
      await sendJson(response, 400, { ok: false });
    }
    return;
  }

  await sendJson(response, 405, { ok: false, error: "Method not allowed" });
}

async function handleStatic(request, response) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const requestedPath = url.pathname === "/" ? "/index.html" : decodeURIComponent(url.pathname);
  const safePath = normalize(requestedPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = join(rootDir, safePath.replace(/^[/\\]+/, ""));

  if (!filePath.startsWith(rootDir)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const content = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": mimeTypes[extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    response.end(content);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
}

const server = createServer(async (request, response) => {
  if (request.url?.startsWith("/api/state")) {
    await handleStateApi(request, response);
    return;
  }

  await handleStatic(request, response);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`VARZAR shoot planner running on http://0.0.0.0:${port}`);
});
