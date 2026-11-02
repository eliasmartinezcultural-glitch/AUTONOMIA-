# AUTONOMÍA

Biblioteca digital estática, curada y comunitaria. Ordena recursos, explica qué contiene cada uno y facilita el acceso a la fuente confiable.

## Principios editoriales

1. Empezar por San Patricio del Chañar, luego Neuquén y Patagonia, Argentina y el mundo hispanohablante.
2. Priorizar utilidad, valor cultural, educativo, histórico y comunitario por encima de la cantidad.
3. Cada ficha debe identificar autoría, institución o procedencia, territorio, formato, fuente y situación de derechos.
4. No confundir acceso gratuito con permiso para copiar o redistribuir.
5. Cuando el permiso de redistribución no esté comprobado, enlazar a la fuente original y no alojar una copia.
6. No publicar datos personales, material privado ni documentos que expongan a vecinos.

## Estructura

- `index.html`: página principal.
- `styles.css`: diseño adaptable y reglas de accesibilidad.
- `app.js`: búsqueda, filtros y renderizado del catálogo.
- `catalogo.json`: fichas descriptivas de los materiales.
- `archivos/`: espacio para archivos que AUTONOMÍA tenga derecho a alojar.

## Cómo agregar un material

Agregar un objeto dentro del arreglo `files` de `catalogo.json`:

```json
{
  "id": "identificador-unico",
  "title": "Título del material",
  "description": "Descripción breve, clara y honesta.",
  "category": "libros",
  "author": "Autor o institución",
  "format": "PDF",
  "territory": "San Patricio del Chañar",
  "sourceName": "Nombre del repositorio o institución",
  "sourceUrl": "https://sitio-oficial.example/documento",
  "url": "https://sitio-oficial.example/documento",
  "accessLabel": "Consultar fuente oficial",
  "rightsLabel": "Estado de derechos comprobado",
  "rightsNote": "Nota breve sobre el permiso o la decisión de enlazar.",
  "tags": ["historia", "educación"]
}
```

Categorías disponibles: `libros`, `documentos`, `educacion`, `guias`, `otros`.

Si el archivo puede alojarse legalmente en el repositorio, subirlo a `archivos/` y usar una ruta relativa en `url`. Conservar siempre la fuente y la atribución. No subir una obra solo porque se pueda descargar desde otro sitio.

## Criterios de catalogación

- **Dominio público:** comprobar autoría, fecha de fallecimiento/publicación y plazo aplicable en cada jurisdicción; guardar la fuente que fundamenta la decisión.
- **Licencia abierta:** registrar la licencia exacta y respetar sus condiciones, incluida atribución y restricciones.
- **Acceso público, derechos no verificados:** enlazar a la fuente original; no redistribuir.
- **Documento institucional:** identificar organismo, fecha y versión; advertir si puede haber actualizaciones.
- **Documento histórico:** señalar claramente su fecha y no presentarlo como información vigente.

## Experiencia y accesibilidad

Diseño adaptable a celulares pequeños, tabletas y computadoras; controles claros, texto legible, navegación por teclado y sin necesidad de cuentas. La página debe seguir siendo liviana y funcionar como sitio estático, sin backend ni base de datos.

## Publicación

Puede publicarse con GitHub Pages desde la raíz de la rama principal (`main`). Esta rama de trabajo todavía no implica que GitHub Pages esté habilitado.

## Estado

Versión 0.2.0: primera colección de cuatro recursos catalogados. Tres fichas llevan a fuentes oficiales cuya redistribución no se ha verificado; una obra está identificada por el Estado nacional como recurso de dominio público. El catálogo debe seguir creciendo mediante investigación y revisión, no por acumulación.
