/* AUTONOMÍA — catálogo curado. Cada ficha distingue acceso y permisos de redistribución. */
const state = { category: "todos", query: "", files: [] };
const grid = document.querySelector("#catalog-grid");
const empty = document.querySelector("#empty-state");
const count = document.querySelector("#result-count");
const search = document.querySelector("#search-input");

const categoryNames = {
  libros: "Libro", documentos: "Documento", educacion: "Educación",
  guias: "Guía", otros: "Recurso"
};

function safeText(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[char]);
}

function safeLink(value = "") {
  const url = String(value).trim();
  if (/^https:\/\//i.test(url) || /^[a-z0-9._/-]+$/i.test(url)) return safeText(url);
  return "#";
}

function render() {
  const query = state.query.trim().toLocaleLowerCase("es");
  const visible = state.files.filter(file => {
    const matchesCategory = state.category === "todos" || file.category === state.category;
    const haystack = [
      file.title, file.description, file.author, file.territory,
      file.sourceName, ...(file.tags || [])
    ].join(" ").toLocaleLowerCase("es");
    return matchesCategory && haystack.includes(query);
  });

  count.textContent = visible.length;
  empty.hidden = visible.length > 0;
  grid.innerHTML = visible.map(file => {
    const type = categoryNames[file.category] || "Recurso";
    const extension = (file.format || "PDF").toUpperCase().slice(0, 4);
    const url = safeLink(file.url || "");
    const sourceUrl = safeLink(file.sourceUrl || file.url || "");
    const action = url !== "#"
      ? `<a class="download-link" href="${url}" target="_blank" rel="noopener noreferrer">${safeText(file.accessLabel || "Consultar material")} ↗</a>`
      : `<span class="download-link">Acceso pendiente</span>`;
    return `<article class="file-card">
      <div class="card-topline"><span class="file-type" aria-label="${safeText(type)}">${safeText(extension)}</span><span class="territory-tag">${safeText(file.territory || "Colección general")}</span></div>
      <h3>${safeText(file.title)}</h3>
      <p>${safeText(file.description || "")}</p>
      <div class="record-source">Fuente: <a href="${sourceUrl}" target="_blank" rel="noopener noreferrer">${safeText(file.sourceName || file.author || "Fuente consultada")}</a></div>
      <div class="rights-note">${safeText(file.rightsLabel || "Permisos por verificar")}</div>
      <div class="file-meta"><span>${safeText(file.format || "Archivo")} · ${safeText(file.author || type)}</span>${action}</div>
    </article>`;
  }).join("");

  if (!visible.length) {
    const hasSearch = Boolean(query) || state.category !== "todos";
    empty.querySelector("h3").textContent = hasSearch
      ? "Todavía no encontramos ese material."
      : "La biblioteca está preparando sus estantes.";
    empty.querySelector("p").textContent = hasSearch
      ? "Probá con otra palabra o elegí otra categoría. Vamos incorporando materiales cuidadosamente."
      : "Estamos reuniendo documentos y recursos útiles, con fuentes claras y permisos revisados.";
    empty.querySelector("span").textContent = hasSearch
      ? "CAMBIÁ LA BÚSQUEDA PARA SEGUIR EXPLORANDO"
      : "POCOS MATERIALES, BIEN ELEGIDOS";
  }
}

document.querySelector("#category-filters").addEventListener("click", event => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  document.querySelectorAll(".filter").forEach(item => item.classList.toggle("active", item === button));
  render();
});

search.addEventListener("input", event => {
  state.query = event.target.value;
  render();
});

fetch("catalogo.json")
  .then(response => {
    if (!response.ok) throw new Error("No se pudo cargar el catálogo");
    return response.json();
  })
  .then(data => {
    state.files = Array.isArray(data.files) ? data.files : [];
    render();
  })
  .catch(error => {
    console.error(error);
    state.files = [];
    render();
    empty.hidden = false;
    empty.querySelector("h3").textContent = "No pudimos cargar el catálogo.";
    empty.querySelector("p").textContent = "Revisá que catalogo.json esté publicado junto a esta página.";
  });
