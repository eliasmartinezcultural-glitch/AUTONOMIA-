/* AUTONOMÍA 0.9.0 — catálogo local, navegación por actividades y lector accesible. */
"use strict";

const state = { category: "todos", query: "", files: [], categories: [], readerSize: 18 };
const $ = selector => document.querySelector(selector);
const grid = $("#catalog-grid");
const empty = $("#empty-state");
const count = $("#result-count");
const search = $("#search-input");
const reviewNote = $("#review-note");
const reviewCount = $("#review-count");
const categoryGrid = $("#category-filters");
const showAll = $("#show-all");
const reader = $("#reader-dialog");
const readerTitle = $("#reader-title");
const readerCredit = $("#reader-credit");
const readerBody = $("#reader-body");
const readerDownload = $("#reader-download");

function safeText(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" })[char]);
}
function localArchivePath(value = "") {
  const path = String(value).trim();
  if (!path.startsWith("archivos/") || path.includes("\\") || /[?#:]/.test(path)) return "";
  const parts = path.split("/");
  if (parts.some(part => !part || part === "." || part === "..")) return "";
  return parts.map(encodeURIComponent).join("/");
}
function isPublishable(file) {
  return file.publicationStatus === "publicado" && file.rightsVerified === true && Boolean(localArchivePath(file.filePath));
}
function getPublished() {
  return state.files.filter(isPublishable);
}
function renderCategories() {
  const published = getPublished();
  const counts = Object.fromEntries(state.categories.map(category => [category.id, published.filter(file => file.category === category.id).length]));
  categoryGrid.innerHTML = state.categories.map(category => {
    const total = counts[category.id] || 0;
    const selected = state.category === category.id;
    return '<button class="category-card' + (selected ? ' selected' : '') + (!total ? ' coming-soon' : '') + '" type="button" data-category="' + safeText(category.id) + '" aria-pressed="' + selected + '">' +
      '<span class="category-icon" aria-hidden="true">' + safeText(category.icon || "✳") + '</span>' +
      '<span class="category-name">' + safeText(category.name) + '</span>' +
      '<span class="category-description">' + safeText(category.description || "") + '</span>' +
      '<span class="category-count">' + (total ? total + (total === 1 ? ' archivo disponible' : ' archivos disponibles') : 'Colección en preparación') + '</span>' +
      '</button>';
  }).join("");
  showAll.classList.toggle("active", state.category === "todos");
  showAll.setAttribute("aria-pressed", String(state.category === "todos"));
}
function render() {
  const query = state.query.trim().toLocaleLowerCase("es");
  const published = getPublished();
  const visible = published.filter(file => {
    const matchesCategory = state.category === "todos" || file.category === state.category;
    const haystack = [file.title,file.description,file.author,file.territory,file.sourceName,file.rightsLabel,file.rightsNote,...(Array.isArray(file.tags)?file.tags:[])].join(" ").toLocaleLowerCase("es");
    return matchesCategory && haystack.includes(query);
  });
  count.textContent = String(visible.length);
  reviewCount.textContent = String(state.files.length - published.length);
  reviewNote.hidden = state.files.length === published.length;
  empty.hidden = visible.length > 0;
  grid.innerHTML = visible.map(file => {
    const path = localArchivePath(file.filePath);
    const ext = String(file.format || "ARCHIVO").toUpperCase().split(/[ ·,]/)[0].slice(0,8);
    const tags = (Array.isArray(file.tags)?file.tags:[]).slice(0,4).map(tag => '<span class="record-tag">' + safeText(tag) + "</span>").join("");
    const category = state.categories.find(item => item.id === file.category);
    const readable = /\\.(txt|md)$/i.test(path);
    const readAction = readable ? '<button class="read-link" type="button" data-read="' + path + '" data-title="' + safeText(file.title) + '" data-author="' + safeText(file.author || "") + '">Leer aquí ↗</button>' : '<a class="download-link" href="' + path + '" target="_blank" rel="noopener noreferrer">Ver archivo ↗</a>';
    return '<article class="file-card">' +
      '<div class="card-topline"><span class="file-type">' + safeText(ext) + '</span><span class="territory-tag">' + safeText(file.territory || "Colección general") + '</span></div>' +
      '<p class="card-category">' + safeText(category ? category.name : "Archivo") + '</p>' +
      '<h3>' + safeText(file.title) + '</h3><p>' + safeText(file.description || "") + '</p>' +
      '<div class="record-tags">' + tags + '</div>' +
      '<div class="record-source">Autoría / institución: <strong>' + safeText(file.author || "No identificada") + '</strong></div>' +
      '<div class="record-source">Procedencia: <strong>' + safeText(file.sourceName || "No identificada") + '</strong></div>' +
      '<div class="rights-note"><strong>' + safeText(file.rightsLabel || "Derechos revisados") + '</strong><span>' + safeText(file.rightsNote || "") + '</span></div>' +
      '<div class="file-meta"><span>' + safeText(file.format || "Archivo") + '</span><span class="archive-actions">' +
      readAction + '<a class="download-link" href="' + path + '" download>Descargar ↓</a></span></div></article>';
  }).join("");
  if (!visible.length) {
    const selected = state.categories.find(item => item.id === state.category);
    const hasSearch = Boolean(query) || state.category !== "todos";
    empty.querySelector("h3").textContent = query
      ? "Todavía no encontramos un archivo con esa búsqueda."
      : selected ? "Esta colección está creciendo." : "Estamos ampliando la biblioteca.";
    empty.querySelector("p").textContent = query
      ? "Probá con otra palabra o quitá los filtros. Solo mostramos archivos alojados y autorizados."
      : selected ? "Estamos buscando obras terminadas de terceros para esta categoría. No publicamos fichas vacías ni materiales sin permiso de redistribución." : "Preferimos archivos reales, útiles y con permisos claros antes que una lista interminable de enlaces.";
    empty.querySelector("span").textContent = hasSearch ? "CAMBIÁ LA BÚSQUEDA PARA SEGUIR EXPLORANDO" : "LEER · APRENDER · CREAR · COMPARTIR";
  }
  renderCategories();
}
function openReader(path, title, author) {
  if (!reader || !path) return;
  readerTitle.textContent = title || "Lectura";
  readerCredit.textContent = author ? "Autoría: " + author : "Archivo de la colección";
  readerDownload.href = path;
  readerDownload.download = path.split("/").pop();
  readerBody.innerHTML = '<p class="reader-loading">Cargando el texto original…</p>';
  state.readerSize = 18;
  readerBody.style.fontSize = state.readerSize + "px";
  if (typeof reader.showModal === "function") reader.showModal();
  fetch(path).then(response => {
    if (!response.ok) throw new Error("No se pudo abrir el archivo.");
    return response.text();
  }).then(text => {
    readerBody.textContent = text.replace(/^\\uFEFF/, "");
    readerBody.focus();
  }).catch(() => {
    readerBody.textContent = "No pudimos cargar la lectura en esta ventana. Podés abrir o descargar el archivo original desde el botón de abajo.";
  });
}
categoryGrid.addEventListener("click", event => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  render();
  $("#catalog-grid").scrollIntoView({behavior:"smooth",block:"start"});
});
grid.addEventListener("click", event => {
  const button = event.target.closest("button[data-read]");
  if (button) openReader(button.dataset.read, button.dataset.title, button.dataset.author);
});
showAll.addEventListener("click", () => { state.category = "todos"; state.query = ""; search.value = ""; render(); });
search.addEventListener("input", event => { state.query = event.target.value; render(); });
$("#reader-close")?.addEventListener("click", () => reader.close());
$("#reader-smaller")?.addEventListener("click", () => { state.readerSize = Math.max(14, state.readerSize - 2); readerBody.style.fontSize = state.readerSize + "px"; });
$("#reader-larger")?.addEventListener("click", () => { state.readerSize = Math.min(28, state.readerSize + 2); readerBody.style.fontSize = state.readerSize + "px"; });
$("#reader-reset")?.addEventListener("click", () => { state.readerSize = 18; readerBody.style.fontSize = "18px"; });
reader?.addEventListener("click", event => { if (event.target === reader) reader.close(); });

fetch("catalogo.json").then(response => {
  if (!response.ok) throw new Error("No se pudo cargar el catálogo");
  return response.json();
}).then(data => {
  state.files = Array.isArray(data.files) ? data.files : [];
  state.categories = Array.isArray(data.categories) ? data.categories : [];
  render();
}).catch(error => {
  console.error(error);
  state.files = [];
  state.categories = [];
  render();
  empty.hidden = false;
  empty.querySelector("h3").textContent = "No pudimos cargar la biblioteca.";
  empty.querySelector("p").textContent = "Revisá que catalogo.json esté publicado junto a esta página.";
});
