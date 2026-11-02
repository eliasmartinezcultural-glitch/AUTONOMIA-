# AUTONOMÍA

Biblioteca digital estática para alojar, organizar, consultar y descargar libros, documentos y archivos.

## Estructura

- `index.html`: página principal.
- `styles.css`: diseño adaptable a celulares, tabletas y computadoras.
- `app.js`: búsqueda, filtros y renderizado del catálogo.
- `catalogo.json`: listado de materiales publicados.
- `archivos/`: carpeta prevista para alojar los documentos descargables.

## Cómo agregar un material

1. Subí el archivo a una carpeta dentro de `archivos/` (por ejemplo, `archivos/libros/mi-libro.pdf`).
2. Agregá un objeto dentro del arreglo `files` de `catalogo.json`:

```json
{
  "title": "Título del material",
  "description": "Una descripción breve y clara.",
  "category": "libros",
  "author": "Autor o institución",
  "format": "PDF",
  "size": "2 MB",
  "url": "archivos/libros/mi-libro.pdf",
  "tags": ["lectura", "historia"]
}
```

Categorías disponibles: `libros`, `documentos`, `educacion`, `guias`, `otros`.

## Publicación

El sitio no necesita servidor, base de datos, cuentas ni backend. Puede publicarse con GitHub Pages desde la raíz de la rama principal (`main`).

## Criterio de publicación

Publicar únicamente archivos propios o materiales cuya licencia permita compartirlos, obras de dominio público o documentos con autorización expresa. Atribuir autoría y licencia cuando corresponda. No subir material privado, datos personales ni documentos protegidos sin permiso.

## Estado

Versión inicial de estructura. El catálogo comienza vacío deliberadamente: no se incorporaron libros ni documentos sin verificar su procedencia y permisos.