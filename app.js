/* AUTONOMÍA — catálogo estático. Los archivos se describen en catalogo.json. */
const state = { category: "todos", query: "", files: [] };
const grid = document.querySelector("#catalog-grid");
const empty = document.querySelector("#empty-state");
const count = document.querySelector("#result-count");
const search = document.querySelector("#search-input");

const categoryNames = {
  libros: "Libro", documentos: "Documento", educacion: "Educación",
  guias: "Guía", otros: "Archivo"
};

function safeText(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[char]);
}

function render() {
  const query = state.query.trim().toLocaleLowerCase("es");
  const visible = state.files.filter(file => {
    const matchesCategory = state.category === "todos" || file.category === state.category;
    const haystack = [file.title, file.description, file.author, ...(file.tags || [])].join(" ").toLocaleLowerCase("es");
    return matchesCategory && haystack.includes(query);
  });

  count.textContent = visible.length;
  empty.hidden = visible.length > 0;
  grid.innerHTML = visible.map(file => {
    const type = categoryNames[file.category] || "Archivo";
    const extension = (file.format || "PDF").toUpperCase().slice(0, 4);
    const size = file.size ? safeText(file.size) : extension;
    const url = safeText(file.url || "#");
    const action = file.url
      ? `<a class="download-link" href="${url}" target="_blank" rel="noopener">Abrir / descargar ↗</a>`
      : `<span class="download-link">Archivo pendiente</span>`;
    return `<article class="file-card">
      <div class="file-type" aria-label="${safeText(type)}">${safeText(extension)}</div>
      <h3>${safeText(file.title)}</h3>
      <p>${safeText(file.description || "")}</p>
      <div class="file-meta"><span>${safeText(file.author || type)} · ${size}</span>${action}</div>
    </article>`;
  }).join("");
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
    empty.querySelector("h3").textContent = "No pudimos cargar el catálogo.";
    empty.querySelector("p").textContent = "Revisá que catalogo.json esté publicado junto a esta página.";
  });