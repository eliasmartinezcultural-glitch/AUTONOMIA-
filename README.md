# AUTONOMÍA

Vidriera y biblioteca de acceso: descubre, selecciona, cataloga y acerca materiales terminados creados por terceros. AUTONOMÍA no produce los contenidos de su colección.

## LEY FUNDAMENTAL: AUTONOMÍA ES UNA VIDRIERA

**AUTONOMÍA NO CREA CONTENIDOS. PONE AL ALCANCE OBRAS YA TERMINADAS POR OTROS AUTORES E INSTITUCIONES.**

Esta regla está por encima de cualquier decisión de diseño, programación, crecimiento o catálogo.

- No escribimos, encargamos, producimos, ilustramos, traducimos, adaptamos, completamos ni reescribimos los materiales de la colección.
- No modificamos los archivos originales ni presentamos obras ajenas como propias.
- No fabricamos publicaciones para llenar estantes. Si hay pocos materiales buenos, mostramos pocos.
- Sí investigamos, descubrimos, seleccionamos, verificamos, clasificamos y catalogamos obras terminadas de terceros.
- Sí redactamos fichas descriptivas propias y neutrales: título, autoría, procedencia, tema, fecha, formato, territorio, licencia y forma de acceso. La ficha orienta; no reemplaza ni recrea la obra.
- Preferimos enlazar al repositorio legítimo de origen. Solo alojamos una copia cuando la situación jurídica permite expresamente esa redistribución.
- Respetamos autoría, integridad, atribución, licencias y condiciones de uso.

**Nuestra tarea es ser una vidriera y un puente: encontrar lo que ya existe, darle orden, contexto y visibilidad, y acercar a las personas a la obra de su autor.**

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

## Cómo agregar una ficha de una obra existente

Solo se incorpora una ficha de una obra ya terminada, creada por un tercero y localizada en una fuente legítima. Nunca se crea una obra para agregarla al catálogo. Agregar el registro descriptivo dentro del arreglo `files` de `catalogo.json`:

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

La opción preferida es enlazar al archivo o ficha de la fuente original. Solo descargar y alojar una copia en `archivos/` cuando se haya verificado que la obra está en dominio público, tiene una licencia que permite redistribuirla o existe autorización expresa. No editar ni alterar el archivo original. Conservar siempre la fuente y la atribución. No subir una obra solo porque se pueda descargar desde otro sitio.

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


## Ampliación del catálogo · versión 0.3.0

La colección inicial se amplió con obras literarias en dominio público por antigüedad de sus autores y con dos portales institucionales de consulta:

- *Facundo*, de Domingo F. Sarmiento — Project Gutenberg, eBook 33267.
- *La vuelta de Martín Fierro*, de José Hernández — Project Gutenberg, eBook 15066.
- *Don Quijote de la Mancha*, de Miguel de Cervantes — Project Gutenberg, eBook 2000.
- *Azul…*, de Rubén Darío — Project Gutenberg, eBook 52894.
- Objetos digitales de la Biblioteca Nacional Mariano Moreno — portal institucional de consulta.
- Biblioteca Digital Hispánica / BNE Digital — colección institucional; verificar la licencia de cada registro.

### Criterio de derechos y acceso

- La ficha de una obra original y los derechos de una edición digital concreta no son necesariamente lo mismo.
- Project Gutenberg informa que sus registros de dominio público se refieren a Estados Unidos. AUTONOMÍA enlaza a esos registros y no aloja sus copias.
- Para las obras de autores fallecidos hace más de 70 años, la ficha indica el criterio de dominio público de la obra original en Argentina; deben considerarse por separado traducciones, ilustraciones, prólogos, fotografías y otras contribuciones de cada edición.
- La Biblioteca Nacional Argentina identifica sus objetos digitales de dominio público y ofrece consulta libre. Las condiciones de reutilización se verifican en cada registro.
- La BNE indica condiciones CC BY para su conjunto de obras en dominio público; se debe revisar la licencia que acompaña cada objeto.
- Los portales de colecciones son puertas de entrada a materiales de terceros, no obras creadas por AUTONOMÍA.

Fuentes institucionales de referencia:
- Ley 11.723, texto actualizado: https://www.argentina.gob.ar/normativa/nacional/42755/actualizacion
- Biblioteca Nacional, servicios online: https://www.bn.gob.ar/biblioteca/servicios/online
- Biblioteca Nacional de España, BNE Digital: https://bnedigital.bne.es/
- Project Gutenberg: https://www.gutenberg.org/


## Colección de materiales para imprimir · versión 0.4.0

Se agregaron ocho fichas nuevas:

- Mapas escolares de la provincia del Neuquén — IGN.
- Mapas de Argentina y planisferios — IGN.
- Mapoteca Educ.ar — mapas para dibujar, pintar, descargar e imprimir.
- Educ.ar — libros, cuadernillos y actividades.
- Juegos históricos para imprimir y recortar — Library of Congress.
- Libros infantiles clásicos ilustrados — Library of Congress.
- Smithsonian Open Access — imágenes identificadas con CC0.
- The Met Open Access — imágenes identificadas con OA / CC0.

### Regla de reutilización

- IGN declara sus mapas escolares bajo CC BY-SA 4.0: atribuir la fuente y mantener la misma licencia al compartir adaptaciones.
- Educ.ar y Mapoteca se incorporan como portales de acceso; la licencia debe revisarse en cada recurso.
- Library of Congress presenta colecciones seleccionadas como “Free to Use and Reuse”; verificar la nota de derechos de cada objeto y el marco jurídico del país donde se reutiliza.
- Smithsonian: solo los activos identificados con CC0 se incorporan como reutilizables sin permiso del Smithsonian. Pueden existir derechos de terceros.
- The Met: solo las obras identificadas con el ícono OA pertenecen al programa CC0; no extender esa condición a todo el sitio.

El filtro “Para imprimir” reúne recursos pensados para llevar al papel, pero cada ficha conserva su propia nota de derechos y su enlace a la fuente.
