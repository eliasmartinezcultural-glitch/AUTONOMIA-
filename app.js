/* AUTONOMÍA 0.7.0 — solo muestra archivos alojados y autorizados para redistribución. */
"use strict";
const state = { category: "todos", query: "", files: [] };
const grid = document.querySelector("#catalog-grid");
const empty = document.querySelector("#empty-state");
const count = document.querySelector("#result-count");
const search = document.querySelector("#search-input");
const reviewNote = document.querySelector("#review-note");
const reviewCount = document.querySelector("#review-count");
const categoryNames = { libros:"Libro", documentos:"Documento", educacion:"Educación", guias:"Guía", imprimir:"Para imprimir", contactos:"Contacto útil", otros:"Archivo" };
function safeText(value = "") {
  return String(value).replace(/[&<>"\']/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"\':"&quot;", "\'":"&#039;" })[char]);
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
function render() {
  const query = state.query.trim().toLocaleLowerCase("es");
  const published = state.files.filter(isPublishable);
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
    const type = categoryNames[file.category] || "Archivo";
    const extension = safeText((file.format || "ARCHIVO").toUpperCase().slice(0,12));
    const tags = (Array.isArray(file.tags)?file.tags:[]).slice(0,4).map(tag => '<span class="record-tag">' + safeText(tag) + "</span>").join("");
    return '<article class="file-card">' +
      '<div class="card-topline"><span class="file-type">' + extension + '</span><span class="territory-tag">' + safeText(file.territory || "Colección general") + '</span></div>' +
      '<h3>' + safeText(file.title) + '</h3><p>' + safeText(file.description || "") + '</p>' +
      '<div class="record-tags">' + tags + '</div>' +
      '<div class="record-source">Autoría / institución: <strong>' + safeText(file.author || "No identificada") + '</strong></div>' +
      '<div class="record-source">Procedencia: <strong>' + safeText(file.sourceName || "No identificada") + '</strong></div>' +
      '<div class="rights-note"><strong>' + safeText(file.rightsLabel || "Derechos verificados") + '</strong><span>' + safeText(file.rightsNote || "") + '</span></div>' +
      '<div class="file-meta"><span>' + safeText(type) + " · " + safeText(file.format || "Archivo") + '</span><span class="archive-actions">' +
      '<a class="download-link" href="' + path + '" target="_blank" rel="noopener noreferrer">Ver archivo ↗</a>' +
      '<a class="download-link" href="' + path + '" download>Descargar ↓</a></span></div></article>';
  }).join("");
  if (!visible.length) {
    const hasSearch = Boolean(query) || state.category !== "todos";
    empty.querySelector("h3").textContent = hasSearch ? "No encontramos un archivo publicado con esa búsqueda." : "Todavía no hay archivos listos para descargar.";
    empty.querySelector("p").textContent = hasSearch ? "Probá con otra palabra o categoría. Solo mostramos archivos alojados y autorizados." : "Estamos revisando los materiales investigados. Solo aparecerán acá cuando el archivo esté guardado dentro de AUTONOMÍA y tengamos verificados los permisos para compartirlo.";
    empty.querySelector("span").textContent = hasSearch ? "CAMBIÁ LA BÚSQUEDA PARA SEGUIR EXPLORANDO" : "ENTRAR · ENCONTRAR · VER · DESCARGAR";
  }
}
document.querySelector("#category-filters").addEventListener("click", event => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  document.querySelectorAll(".filter").forEach(item => item.classList.toggle("active", item === button));
  render();
});
search.addEventListener("input", event => { state.query = event.target.value; render(); });
fetch("catalogo.json").then(response => { if (!response.ok) throw new Error("No se pudo cargar el catálogo"); return response.json(); })
  .then(data => { state.files = Array.isArray(data.files) ? data.files : []; render(); })
  .catch(error => { console.error(error); state.files = []; render(); empty.hidden = false; empty.querySelector("h3").textContent = "No pudimos cargar el catálogo."; empty.querySelector("p").textContent = "Revisá que catalogo.json esté publicado junto a esta página."; });
