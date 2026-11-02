/* AUTONOMÍA 0.8.1 — biblioteca por actividades, categorías generales y archivos locales verificados. */
"use strict";
const state = { category: "todos", query: "", files: [], categories: [] };
const grid = document.querySelector("#catalog-grid");
const empty = document.querySelector("#empty-state");
const count = document.querySelector("#result-count");
const search = document.querySelector("#search-input");
const reviewNote = document.querySelector("#review-note");
const reviewCount = document.querySelector("#review-count");
const categoryGrid = document.querySelector("#category-filters");
const showAll = document.querySelector("#show-all");

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
    const disabled = total === 0;
    return '<button class="category-card' + (selected ? ' selected' : '') + (disabled ? ' coming-soon' : '') + '" type="button" data-category="' + safeText(category.id) + '"' + (disabled ? ' disabled aria-disabled="true"' : ' aria-pressed="' + selected + '"') + '>' +
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
    return '<article class="file-card">' +
      '<div class="card-topline"><span class="file-type">' + safeText(ext) + '</span><span class="territory-tag">' + safeText(file.territory || "Colección general") + '</span></div>' +
      '<p class="card-category">' + safeText(category ? category.name : "Archivo") + '</p>' +
      '<h3>' + safeText(file.title) + '</h3><p>' + safeText(file.description || "") + '</p>' +
      '<div class="record-tags">' + tags + '</div>' +
      '<div class="record-source">Autoría / institución: <strong>' + safeText(file.author || "No identificada") + '</strong></div>' +
      '<div class="record-source">Procedencia: <strong>' + safeText(file.sourceName || "No identificada") + '</strong></div>' +
      '<div class="rights-note"><strong>' + safeText(file.rightsLabel || "Derechos revisados") + '</strong><span>' + safeText(file.rightsNote || "") + '</span></div>' +
      '<div class="file-meta"><span>' + safeText(file.format || "Archivo") + '</span><span class="archive-actions">' +
      '<a class="download-link" href="' + path + '" target="_blank" rel="noopener noreferrer">Ver archivo ↗</a>' +
      '<a class="download-link" href="' + path + '" download>Descargar ↓</a></span></div></article>';
  }).join("");
  if (!visible.length) {
    const hasSearch = Boolean(query) || state.category !== "todos";
    empty.querySelector("h3").textContent = hasSearch ? "Todavía no encontramos un archivo con esa búsqueda." : "Estamos ampliando la biblioteca.";
    empty.querySelector("p").textContent = hasSearch ? "Probá con otra palabra o volvé a ver todo el catálogo. Solo mostramos archivos alojados y autorizados." : "Las colecciones se incorporan de a poco. Preferimos archivos reales, útiles y con permisos claros antes que una lista interminable de enlaces.";
    empty.querySelector("span").textContent = hasSearch ? "CAMBIÁ LA BÚSQUEDA PARA SEGUIR EXPLORANDO" : "LEER · APRENDER · CREAR · COMPARTIR";
  }
  renderCategories();
}
categoryGrid.addEventListener("click", event => {
  const button = event.target.closest("button[data-category]");
  if (!button || button.disabled) return;
  state.category = button.dataset.category;
  render();
  document.querySelector("#catalog-grid").scrollIntoView({behavior:"smooth",block:"start"});
});
showAll.addEventListener("click", () => { state.category = "todos"; state.query = ""; search.value = ""; render(); });
search.addEventListener("input", event => { state.query = event.target.value; render(); });
fetch("catalogo.json").then(response => { if (!response.ok) throw new Error("No se pudo cargar el catálogo"); return response.json(); })
  .then(data => {
    state.files = Array.isArray(data.files) ? data.files : [];
    state.categories = Array.isArray(data.categories) ? data.categories : [];
    render();
  })
  .catch(error => {
    console.error(error); state.files = []; state.categories = []; render(); empty.hidden = false;
    empty.querySelector("h3").textContent = "No pudimos cargar la biblioteca.";
    empty.querySelector("p").textContent = "Revisá que catalogo.json esté publicado junto a esta página.";
  });
