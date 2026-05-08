const storageKey = "varzar-shoot-planner-v2";
const canUseSharedServer = location.protocol === "http:" || location.protocol === "https:";

const demoState = {
  shootDate: "2026-05-15",
  checks: {
    samples: false,
    styling: false,
    detail: false,
    sns: false,
  },
  notes: {
    concept:
      "바잘 모자 라인과 자연스럽게 이어지는 데일리 유틸리티 무드. 로고 포인트, 착용감, 수납 디테일을 선명하게 보여준다.",
    field: "블랙/크림 컬러는 디테일 컷 우선. 숏폼은 착용 전환, 스트랩 조절, 내부 수납 순서로 촬영.",
  },
  products: [
    { id: "bag-001", name: "룬 벨로 호보백 미디움", englishName: "Lune Velo Hobo Bag Medium", color: "블랙", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-002", name: "룬 벨로 호보백 미디움", englishName: "Lune Velo Hobo Bag Medium", color: "다크브라운", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-003", name: "룬 벨로 호보백 미디움", englishName: "Lune Velo Hobo Bag Medium", color: "브라운", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-004", name: "룬 벨로 호보백 미디움", englishName: "Lune Velo Hobo Bag Medium", color: "아이보리", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-005", name: "룬 벨로 호보백 스몰", englishName: "Lune Velo Hobo Bag Small", color: "블랙", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-006", name: "룬 벨로 호보백 스몰", englishName: "Lune Velo Hobo Bag Small", color: "브라운", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-007", name: "룬 벨로 호보백 스몰", englishName: "Lune Velo Hobo Bag Small", color: "그레이", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-008", name: "룬 벨로 호보백 스몰", englishName: "Lune Velo Hobo Bag Small", color: "아이보리", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-009", name: "룬 벨로 호보백 라지", englishName: "Lune Velo Hobo Bag Large", color: "블랙", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-010", name: "룬 벨로 호보백 라지", englishName: "Lune Velo Hobo Bag Large", color: "다크브라운", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-011", name: "미렐 버킷백 스몰", englishName: "Mirel Bucket Bag Small", color: "아이보리", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-012", name: "미렐 버킷백 스몰", englishName: "Mirel Bucket Bag Small", color: "블랙", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-013", name: "미렐 버킷백 스몰", englishName: "Mirel Bucket Bag Small", color: "핑크", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-014", name: "미렐 버킷백 스몰", englishName: "Mirel Bucket Bag Small", color: "스카이블루", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-015", name: "미렐 버킷백 미디움", englishName: "Mirel Bucket Bag Medium", color: "블랙", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-016", name: "미렐 버킷백 미디움", englishName: "Mirel Bucket Bag Medium", color: "브라운", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-017", name: "셀레 드로우 스트링 백팩 미디움", englishName: "Sele Drawstring Backpack Medium", color: "블랙", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-018", name: "셀레 드로우 스트링 백팩 미디움", englishName: "Sele Drawstring Backpack Medium", color: "브라운", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-019", name: "세누아 플랩 크로스백 미니", englishName: "Senoir Flap Cross Bag Mini", color: "블랙", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-020", name: "세누아 플랩 크로스백 미니", englishName: "Senoir Flap Cross Bag Mini", color: "아이보리", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-021", name: "세누아 플랩 크로스백 미니", englishName: "Senoir Flap Cross Bag Mini", color: "핑크", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-022", name: "세누아 플랩 크로스백 미니", englishName: "Senoir Flap Cross Bag Mini", color: "스카이블루", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-023", name: "세누아 플랩 크로스백 스몰", englishName: "Senoir Flap Cross Bag Small", color: "블랙", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-024", name: "세누아 플랩 크로스백 스몰", englishName: "Senoir Flap Cross Bag Small", color: "브라운", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-025", name: "세누아 플랩 크로스백 스몰", englishName: "Senoir Flap Cross Bag Small", color: "아이보리", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-026", name: "비나 숄더백 미디움", englishName: "Vina Shoulder Bag Medium", color: "블랙", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-027", name: "비나 숄더백 미디움", englishName: "Vina Shoulder Bag Medium", color: "다크브라운", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-028", name: "비나 숄더백 미디움", englishName: "Vina Shoulder Bag Medium", color: "그레이", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-029", name: "셀론 쇼퍼백 라지", englishName: "Selon Shopper Bag Large", color: "블랙", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-030", name: "셀론 쇼퍼백 라지", englishName: "Selon Shopper Bag Large", color: "브라운", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
    { id: "bag-031", name: "셀론 쇼퍼백 라지", englishName: "Selon Shopper Bag Large", color: "그레이", priority: "높음", shootDone: false, point: "촬영 기본 리스트", styling: "" },
  ],
  shots: [],
};

let state = loadLocalState();
let editingProductId = null;
let editingShotId = null;
let isSaving = false;

function cloneData(data) {
  return JSON.parse(JSON.stringify(data));
}

function normalizeState(data) {
  if (!data || !Array.isArray(data.products) || data.products.length === 0) {
    return cloneData(demoState);
  }

  const next = {
    ...cloneData(demoState),
    ...(data || {}),
    checks: {
      ...demoState.checks,
      ...((data && data.checks) || {}),
    },
    notes: {
      ...demoState.notes,
      ...((data && data.notes) || {}),
    },
    products: Array.isArray(data && data.products) ? data.products : cloneData(demoState.products),
    shots: Array.isArray(data && data.shots) ? data.shots : cloneData(demoState.shots),
  };

  next.products = next.products.map((product) => ({
    ...product,
    shootDone: Boolean(product.shootDone),
  }));

  return next;
}

function loadLocalState() {
  try {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return cloneData(demoState);

    return normalizeState(JSON.parse(saved));
  } catch {
    return cloneData(demoState);
  }
}

function saveState() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch {
    // Some shared-file contexts block local storage. Keep the current session working.
  }

  saveSharedState();
}

function uid(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function productName(productId) {
  const product = state.products.find((item) => item.id === productId);
  return product ? product.name : "제품 미지정";
}

function render() {
  renderDashboard();
  renderProducts();
  renderShotProductOptions();
  renderShots();
  renderNotes();
  renderChecklist();
}

function renderDashboard() {
  const totalProducts = state.products.length;
  const totalShots = state.shots.length;
  const doneShots = state.shots.filter((shot) => shot.done).length;
  const progress = totalShots ? Math.round((doneShots / totalShots) * 100) : 0;

  document.querySelector("#totalProducts").textContent = totalProducts;
  document.querySelector("#totalShots").textContent = totalShots;
  document.querySelector("#doneShots").textContent = doneShots;
  document.querySelector("#progressText").textContent = `${progress}%`;
  document.querySelector("#remainingText").textContent = `남은 컷 ${totalShots - doneShots}개`;
  document.querySelector("#progressBar").style.width = `${progress}%`;

  const priorityProducts = state.products
    .filter((product) => product.priority === "높음")
    .map((product) => {
      const productShots = state.shots.filter((shot) => shot.productId === product.id);
      const done = productShots.filter((shot) => shot.done).length;
      return `
        <div class="priority-item high">
          <strong>${product.name}</strong>
          <span class="row-sub">${product.color || "컬러 미정"} · ${done}/${productShots.length}컷 완료 · ${product.point || "포인트 미정"}</span>
        </div>
      `;
    });

  document.querySelector("#priorityList").innerHTML =
    priorityProducts.join("") || '<div class="priority-item">높은 우선순위 제품이 아직 없습니다.</div>';
}

function renderProducts() {
  document.querySelector("#productList").innerHTML = state.products
    .map((product, index) => {
      if (product.id === editingProductId) {
        return `
          <form class="table-row edit-row" data-product-edit="${product.id}">
            <label>제품명<input name="name" required value="${escapeHtml(product.name)}" /></label>
            <label>영문명<input name="englishName" value="${escapeHtml(product.englishName || "")}" /></label>
            <label>컬러<input name="color" value="${escapeHtml(product.color || "")}" /></label>
            <label>우선순위
              <select name="priority">
                ${["높음", "보통", "낮음"]
                  .map((priority) => `<option ${product.priority === priority ? "selected" : ""}>${priority}</option>`)
                  .join("")}
              </select>
            </label>
            <label>핵심 포인트<input name="point" value="${escapeHtml(product.point || "")}" /></label>
            <label>스타일링<input name="styling" value="${escapeHtml(product.styling || "")}" /></label>
            <label class="inline-check"><input type="checkbox" name="shootDone" ${product.shootDone ? "checked" : ""} /> 촬영완료</label>
            <div class="row-actions">
              <button type="submit" class="small-button dark">저장</button>
              <button type="button" class="small-button" data-cancel-product-edit>취소</button>
            </div>
          </form>
        `;
      }

      return `
        <article class="table-row ${product.shootDone ? "shoot-done" : ""}">
          <div>
            <div class="row-title">${product.name}</div>
            <div class="row-sub">${product.englishName || product.point || "핵심 포인트 미정"}</div>
          </div>
          <span>${product.color || "컬러 미정"}</span>
          <span class="tag ${product.priority === "높음" ? "high" : ""}">${product.priority}</span>
          <label class="inline-check"><input type="checkbox" data-toggle-product-done="${product.id}" ${product.shootDone ? "checked" : ""} /> 촬영완료</label>
          <span class="row-sub">${product.styling || "스타일링 미정"}</span>
          <div class="row-actions">
            <button class="icon-button" aria-label="위로 이동" data-move-product="${product.id}" data-direction="up" ${index === 0 ? "disabled" : ""}>↑</button>
            <button class="icon-button" aria-label="아래로 이동" data-move-product="${product.id}" data-direction="down" ${index === state.products.length - 1 ? "disabled" : ""}>↓</button>
            <button class="small-button" data-edit-product="${product.id}">수정</button>
            <button class="delete-button" aria-label="제품 삭제" data-delete-product="${product.id}">×</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderShotProductOptions() {
  const select = document.querySelector("#shotProduct");
  select.innerHTML = state.products
    .map((product) => `<option value="${product.id}">${product.name}</option>`)
    .join("");
}

function renderShots() {
  document.querySelector("#shotList").innerHTML = state.shots
    .map((shot) => {
      if (shot.id === editingShotId) {
        return `
          <form class="shot-card edit-shot" data-shot-edit="${shot.id}">
            <label>제품
              <select name="productId">
                ${state.products
                  .map(
                    (product) =>
                      `<option value="${product.id}" ${product.id === shot.productId ? "selected" : ""}>${product.name}</option>`,
                  )
                  .join("")}
              </select>
            </label>
            <label>컷 타입
              <select name="type">
                ${["착용 컷", "디테일 컷", "누끼 컷", "무드 컷", "릴스 컷"]
                  .map((type) => `<option ${shot.type === type ? "selected" : ""}>${type}</option>`)
                  .join("")}
              </select>
            </label>
            <label>장면<input name="scene" value="${escapeHtml(shot.scene || "")}" /></label>
            <label><input type="checkbox" name="done" ${shot.done ? "checked" : ""} /> 완료</label>
            <div class="row-actions">
              <button type="submit" class="small-button dark">저장</button>
              <button type="button" class="small-button" data-cancel-shot-edit>취소</button>
            </div>
          </form>
        `;
      }

      return `
        <article class="shot-card ${shot.done ? "done" : ""}">
          <label>
            <input type="checkbox" data-toggle-shot="${shot.id}" ${shot.done ? "checked" : ""} />
            <strong>${shot.type}</strong>
          </label>
          <div>${shot.scene || "장면 미정"}</div>
          <div class="shot-meta">${productName(shot.productId)}</div>
          <div class="row-actions">
            <button class="small-button" data-edit-shot="${shot.id}">수정</button>
            <button class="delete-button" aria-label="컷 삭제" data-delete-shot="${shot.id}">×</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function escapeHtml(value) {
  return String(value)
    .split("&")
    .join("&amp;")
    .split('"')
    .join("&quot;")
    .split("<")
    .join("&lt;")
    .split(">")
    .join("&gt;");
}

function renderNotes() {
  document.querySelector("#shootDate").value = state.shootDate || "";
  document.querySelector("#conceptNote").value = state.notes.concept || "";
  document.querySelector("#fieldNote").value = state.notes.field || "";
}

function renderChecklist() {
  document.querySelectorAll("[data-check]").forEach((input) => {
    input.checked = Boolean(state.checks[input.dataset.check]);
  });
}

async function loadSharedState() {
  if (!canUseSharedServer) return;

  try {
    const response = await fetch("/api/state", { cache: "no-store" });
    if (!response.ok) return;

    const sharedState = await response.json();
    state = normalizeState(sharedState);
    localStorage.setItem(storageKey, JSON.stringify(state));
    render();
  } catch {
    // Shared mode is optional. The app still works locally if the server is unavailable.
  }
}

async function saveSharedState() {
  if (!canUseSharedServer || isSaving) return;

  isSaving = true;

  try {
    await fetch("/api/state", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    });
  } catch {
    // Keep local changes available even if the shared server drops briefly.
  } finally {
    isSaving = false;
  }
}

function startSharedSync() {
  if (!canUseSharedServer) return;

  window.setInterval(() => {
    if (editingProductId || editingShotId || isSaving) return;
    loadSharedState();
  }, 3000);
}

function setView(viewName) {
  const target = document.querySelector(`#${viewName}View`);
  if (!target) return;

  document.querySelectorAll(".nav-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.view === viewName);
  });
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.remove("active");
  });
  target.classList.add("active");
}

function exportCsv() {
  const rows = [["제품명", "영문명", "컬러", "우선순위", "제품 촬영완료", "컷 타입", "장면", "컷 완료 여부", "핵심 포인트", "스타일링"]];

  state.products.forEach((product) => {
    const productShots = state.shots.filter((shot) => shot.productId === product.id);

    if (!productShots.length) {
      rows.push([
        product.name || "",
        product.englishName || "",
        product.color || "",
        product.priority || "",
        product.shootDone ? "완료" : "미완료",
        "",
        "",
        "",
        product.point || "",
        product.styling || "",
      ]);
    }

    productShots.forEach((shot) => {
      rows.push([
        product.name || "",
        product.englishName || "",
        product.color || "",
        product.priority || "",
        product.shootDone ? "완료" : "미완료",
        shot.type,
        shot.scene,
        shot.done ? "완료" : "미완료",
        product.point || "",
        product.styling || "",
      ]);
    });
  });

  const csv = rows
    .map((row) => row.map((value) => `"${String(value).split('"').join('""')}"`).join(","))
    .join("\n");
  const blob = new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "varzar-bag-shoot-list.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function downloadTextFile(filename, text, type) {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function exportBackup() {
  const backup = {
    exportedAt: new Date().toISOString(),
    state,
  };

  downloadTextFile("varzar-shoot-backup.json", JSON.stringify(backup, null, 2), "application/json;charset=utf-8");
}

function importBackupFile(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const parsed = JSON.parse(String(reader.result || "{}"));
      state = normalizeState(parsed.state || parsed);
      editingProductId = null;
      editingShotId = null;
      saveState();
      render();
    } catch {
      window.alert("백업 파일을 불러오지 못했습니다.");
    }
  });
  reader.readAsText(file);
}

document.querySelectorAll(".nav-tab").forEach((tab) => {
  tab.addEventListener("click", (event) => {
    setView(tab.dataset.view);
  });
});

document.querySelector("#productForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = form.get("name").trim();

  if (!name) return;

  state.products.push({
    id: uid("p"),
    name,
    englishName: "",
    color: form.get("color").trim(),
    priority: form.get("priority"),
    shootDone: false,
    point: form.get("point").trim(),
    styling: form.get("styling").trim(),
  });
  event.currentTarget.reset();
  saveState();
  render();
});

document.querySelector("#shotForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  state.shots.push({
    id: uid("s"),
    productId: form.get("productId"),
    type: form.get("type"),
    scene: form.get("scene").trim(),
    done: false,
  });
  event.currentTarget.reset();
  saveState();
  render();
});

document.addEventListener("click", (event) => {
  const productId = event.target.dataset.deleteProduct;
  const shotId = event.target.dataset.deleteShot;
  const editProductId = event.target.dataset.editProduct;
  const editShotId = event.target.dataset.editShot;
  const moveProductId = event.target.dataset.moveProduct;
  const moveDirection = event.target.dataset.direction;

  if (moveProductId) {
    const currentIndex = state.products.findIndex((product) => product.id === moveProductId);
    const nextIndex = moveDirection === "up" ? currentIndex - 1 : currentIndex + 1;

    if (currentIndex >= 0 && nextIndex >= 0 && nextIndex < state.products.length) {
      const [product] = state.products.splice(currentIndex, 1);
      state.products.splice(nextIndex, 0, product);
      saveState();
      render();
    }

    return;
  }

  if (editProductId) {
    editingProductId = editProductId;
    editingShotId = null;
    render();
    return;
  }

  if (editShotId) {
    editingShotId = editShotId;
    editingProductId = null;
    render();
    return;
  }

  if (event.target.dataset.cancelProductEdit !== undefined) {
    editingProductId = null;
    render();
    return;
  }

  if (event.target.dataset.cancelShotEdit !== undefined) {
    editingShotId = null;
    render();
    return;
  }

  if (productId) {
    state.products = state.products.filter((product) => product.id !== productId);
    state.shots = state.shots.filter((shot) => shot.productId !== productId);
    if (editingProductId === productId) editingProductId = null;
  }

  if (shotId) {
    state.shots = state.shots.filter((shot) => shot.id !== shotId);
    if (editingShotId === shotId) editingShotId = null;
  }

  if (productId || shotId) {
    saveState();
    render();
  }
});

document.addEventListener("submit", (event) => {
  const productEditId = event.target.dataset.productEdit;
  const shotEditId = event.target.dataset.shotEdit;

  if (productEditId) {
    event.preventDefault();
    const product = state.products.find((item) => item.id === productEditId);
    const form = new FormData(event.target);

    if (product) {
      product.name = form.get("name").trim();
      product.englishName = form.get("englishName").trim();
      product.color = form.get("color").trim();
      product.priority = form.get("priority");
      product.shootDone = form.get("shootDone") === "on";
      product.point = form.get("point").trim();
      product.styling = form.get("styling").trim();
    }

    editingProductId = null;
    saveState();
    render();
  }

  if (shotEditId) {
    event.preventDefault();
    const shot = state.shots.find((item) => item.id === shotEditId);
    const form = new FormData(event.target);

    if (shot) {
      shot.productId = form.get("productId");
      shot.type = form.get("type");
      shot.scene = form.get("scene").trim();
      shot.done = form.get("done") === "on";
    }

    editingShotId = null;
    saveState();
    render();
  }
});

document.addEventListener("change", (event) => {
  const shotId = event.target.dataset.toggleShot;
  const checkName = event.target.dataset.check;
  const productDoneId = event.target.dataset.toggleProductDone;

  if (shotId) {
    const shot = state.shots.find((item) => item.id === shotId);
    if (shot) shot.done = event.target.checked;
  }

  if (checkName) {
    state.checks[checkName] = event.target.checked;
  }

  if (productDoneId) {
    const product = state.products.find((item) => item.id === productDoneId);
    if (product) product.shootDone = event.target.checked;
  }

  if (shotId || checkName || productDoneId) {
    saveState();
    render();
  }
});

document.querySelector("#shootDate").addEventListener("input", (event) => {
  state.shootDate = event.target.value;
  saveState();
});

document.querySelector("#conceptNote").addEventListener("input", (event) => {
  state.notes.concept = event.target.value;
  saveState();
});

document.querySelector("#fieldNote").addEventListener("input", (event) => {
  state.notes.field = event.target.value;
  saveState();
});

document.querySelector("#exportCsv").addEventListener("click", exportCsv);
document.querySelector("#exportBackup").addEventListener("click", exportBackup);
document.querySelector("#importBackup").addEventListener("click", () => {
  document.querySelector("#backupFile").click();
});
document.querySelector("#backupFile").addEventListener("change", (event) => {
  importBackupFile(event.target.files[0]);
  event.target.value = "";
});

document.querySelector("#resetDemo").addEventListener("click", () => {
  state = cloneData(demoState);
  saveState();
  render();
});

render();
loadSharedState();
startSharedSync();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
