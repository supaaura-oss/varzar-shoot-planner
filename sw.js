const cacheName = "varzar-shoot-planner-v2";
const appShell = [
  "./",
  "./index.html",
  "./styles.css?v=2",
  "./app.js?v=2",
  "./manifest.webmanifest?v=2",
  "./icon.svg?v=2",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(appShell)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== cacheName).map((key) => caches.delete(key)))),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
