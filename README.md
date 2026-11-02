# AUTONOMÍA

**Biblioteca digital de archivos útiles, con prioridad en San Patricio del Chañar, Neuquén y Patagonia.**

AUTONOMÍA encuentra, selecciona, verifica, ordena y acerca archivos terminados por terceros. No crea materiales para llenar el catálogo.

## Leyes editoriales del proyecto

1. Todo material en papel o digitalizado se cataloga como **archivo**.
2. Todo archivo publicado debe estar alojado dentro de este repositorio y descargarse directamente desde AUTONOMÍA.
3. La experiencia pública debe ser: **entrar → encontrar → ver → descargar**.
4. No se publican enlaces externos como sustituto de una descarga interna.
5. No se aloja una obra ajena sin dominio público aplicable, licencia que permita redistribución o autorización expresa.
6. Acceso gratuito, descarga pública y permiso para redistribuir son cosas distintas.
7. Si los derechos, la edición o el permiso no están verificados, el material permanece en revisión y no aparece como archivo disponible.
8. Se conserva el texto o archivo fuente sin alteraciones sustantivas, junto con autoría, procedencia, atribución, licencia y avisos exigidos.
9. No se inventan archivos ni se producen materiales para completar estantes. Es preferible publicar pocos archivos correctos.

## Estado del catálogo · versión 1.4.0

- **101 fichas** registradas.
- **52 archivos publicados**: 12 obras literarias y 40 ilustraciones vectoriales de Kitbitz.
- **49 referencias en revisión**: no se muestran como descargas mientras falte el archivo local o la verificación de derechos.
- El sitio solo muestra un archivo cuando tiene una ruta local válida dentro de `archivos/`, `publicationStatus: "publicado"` y `rightsVerified: true`.
- Los enlaces externos se conservan como procedencia editorial en `sourceUrl`; nunca se usan como botones de acceso o descarga.

### Archivos actualmente disponibles

1. **El gaucho Martín Fierro** — José Hernández. Project Gutenberg, eBook #14765. TXT con licencia completa conservada.
2. **La vuelta de Martín Fierro** — José Hernández. Project Gutenberg, eBook #15066. TXT con licencia completa conservada.
3. **Cuentos de amor, de locura y de muerte** — Horacio Quiroga. Project Gutenberg, eBook #13507. TXT con licencia completa conservada.
4. **El matadero** — Esteban Echeverría. Texto original en dominio público; transcripción atribuida a Wikisource, redistribuida bajo CC BY-SA 4.0.
5. **Marianela** — Benito Pérez Galdós. Project Gutenberg, eBook #17340. TXT con licencia completa conservada.
6. **El enemigo** — Jacinto Octavio Picón. Project Gutenberg, eBook #29137, segunda edición de 1887. TXT con licencia completa conservada.
7. **Don Quijote de la Mancha** — Miguel de Cervantes. Project Gutenberg, eBook #2000. TXT con licencia completa conservada.
8. **Facundo · Civilización y barbarie** — Domingo Faustino Sarmiento. Project Gutenberg, eBook #33267. TXT con licencia completa conservada.
9. **Azul…** — Rubén Darío. Project Gutenberg, eBook #52894. TXT con licencia completa conservada.
10. **Pepita Jiménez** — Juan Valera. Project Gutenberg, eBook #17223. TXT con licencia completa conservada.
11. **Los pazos de Ulloa** — Emilia Pardo Bazán. Project Gutenberg, eBook #18005. TXT con licencia completa conservada.
12. **El sombrero de tres picos** — Pedro Antonio de Alarcón. Project Gutenberg, eBook #29506. TXT con licencia completa conservada.

Las doce obras están en dominio público en Argentina según el plazo general aplicable a sus autores. En once archivos de Project Gutenberg se conserva íntegra la licencia del proyecto; en `El matadero` se incluye atribución a Wikisource y el enlace a CC BY-SA 4.0. La situación de cada obra y de cada transcripción se registra por separado: que una obra original sea de dominio público no vuelve automáticamente libre cualquier edición, traducción, prólogo, fotografía o ilustración.

## Seis puertas temáticas

1. **Libros y lecturas** — novelas, cuentos, poesía y literatura.
2. **Aprender y enseñar** — estudio, ciencia, educación y formación.
3. **Diseño e ilustración** — ilustraciones, fotografías, arte, patrones y láminas.
4. **Hogar, huerta y naturaleza** — plantas, animales, ambiente y vida rural.
5. **Territorio, historia y cultura** — mapas, patrimonio, documentos e identidad.
6. **Herramientas y vida práctica** — guías, oficios, organización, juegos y recursos útiles.

Cada archivo pertenece a una puerta principal. Las puertas sin descargas verificadas permanecen visibles como colecciones en preparación; no se inventan resultados.

## Cómo publicar un archivo

Antes de incorporar una obra:

1. Identificar el archivo exacto y su autor o institución.
2. Verificar el permiso de redistribución aplicable en Argentina: dominio público, licencia compatible o autorización expresa.
3. Revisar si existen derechos adicionales de edición, traducción, ilustración, fotografía o terceros.
4. Obtener el archivo autorizado y guardarlo dentro de `archivos/`, en una carpeta por tipo.
5. Conservar el archivo fuente y los avisos de licencia. Si se crea una transcripción o conversión, documentar exactamente qué se hizo y con qué permiso.
6. Completar la ficha con autoría, procedencia, licencia, atribución y fecha de verificación.
7. Recién entonces establecer `publicationStatus: "publicado"`, `filePath: "archivos/categoria/archivo.ext"` y `rightsVerified: true`.

No usar rutas externas, absolutas ni que salgan de `archivos/`. No completar los tres campos de publicación hasta que el archivo esté efectivamente incorporado y los permisos comprobados.

## Estructura del proyecto

- `index.html`: portada y biblioteca pública.
- `styles.css`: diseño adaptable, accesibilidad, fichas de archivo y lector integrado.
- `app.js`: búsqueda, filtros por categorías generales, validación de archivos locales y lector integrado para TXT/MD.
- `catalogo.json`: metadatos de referencias y archivos publicados.
- `archivos/`: copias autorizadas para descarga directa.

## Criterios de derechos

- **Dominio público:** verificar el plazo y la jurisdicción aplicables, además de los derechos de la edición digital concreta.
- **Creative Commons:** registrar la licencia exacta y cumplir atribución, restricciones comerciales, compartir igual y límites sobre obras derivadas.
- **CC0 / Open Access:** comprobar que el objeto individual tenga esa identificación y que no haya derechos de terceros.
- **Repositorios institucionales:** la presencia de un PDF o botón de descarga no demuestra por sí sola permiso para republicar.
- **Uso personal o educativo:** no equivale automáticamente a permiso para alojar y redistribuir en una biblioteca pública.
- **Contactos y directorios:** verificar vigencia antes de publicar; no presentar números sin confirmar como líneas de emergencia.

## Accesibilidad y tecnología

Sitio estático, gratuito, sin cuentas, sin backend ni base de datos. Diseñado para celulares, tabletas y computadoras, con texto legible, navegación simple y controles claros.

## Publicación

GitHub Pages puede publicar la raíz de `main` si está habilitado en la configuración del repositorio. Los commits al repositorio no prueban por sí solos que Pages esté activo ni que el sitio público se haya actualizado.

## Principio de crecimiento

**No creamos. Encontramos. Verificamos. Ordenamos. Acercamos.**

La cantidad no es el objetivo. La confianza y la descarga directa sí.


## Experiencia de uso · versión 0.9.0

- Las diez categorías generales se pueden explorar aunque todavía no tengan archivos publicados. Las categorías vacías explican que la colección está en preparación; no se inventan descargas.
- Los textos TXT y MD se pueden leer dentro de AUTONOMÍA, sin abrir una pestaña de texto plano.
- El lector permite aumentar o reducir el tamaño de letra, restablecerlo, cerrar con el control visible y descargar el original.
- La lectura usa el texto local del archivo, sin reescritura ni modificación del contenido.
- Las fichas distinguen autoría, procedencia, territorio, formato y nota de derechos.
- El sitio continúa sin cuentas, backend, base de datos ni servicios pagos.

## Fuentes de expansión investigadas

Estas fuentes sirven para localizar futuras obras y recursos, pero no autorizan a copiar una colección completa sin revisar cada elemento:

- **Clipart.Free:** declara una biblioteca de vectores e imágenes CC0. Antes de incorporar un elemento, guardar su ficha individual, autoría disponible, licencia exacta y archivo original.
- **Wikimedia Commons:** permite reutilizar archivos de dominio público y licencias abiertas compatibles; cada archivo tiene su propia ficha de derechos y atribución.
- **Project Gutenberg:** sus libros deben revisarse individualmente y contrastarse con la legislación argentina; una declaración de dominio público en Estados Unidos no resuelve por sí sola la situación en Argentina.
- **NASA:** muchas imágenes y materiales de la agencia son reutilizables bajo sus pautas, pero se deben excluir marcas, logotipos, personas identificables en usos promocionales y material de terceros protegido.
- **INTA y organismos públicos:** la descarga pública de un manual no equivale automáticamente a permiso de redistribución. Verificar licencia expresa del documento concreto.

La expansión prioriza archivos individuales listos para descarga, no catálogos de enlaces externos. Las fichas pendientes no se cuentan como publicaciones.


## Auditoría y rediseño · versión 1.3.0

Auditoría del repositorio en la rama main:
- 101 fichas catalogadas: 12 obras publicadas y con archivo local; 49 referencias todavía en preparación.
- Los doce archivos del catálogo tienen rutas locales correspondientes a archivos presentes en `archivos/libros/`.
- Las 49 referencias en preparación carecen de archivo local, no tienen estado publicado y no tienen verificación de derechos. Se mantienen fuera de las descargas.
- Se corrigió el reconocimiento de extensiones TXT/MD en el lector integrado (la expresión regular anterior no reconocía correctamente los puntos de extensión).
- Se corrigió la normalización de búsqueda para que acepte términos con o sin tildes.
- Se conservan los filtros por categoría y se permite explorar también categorías aún vacías, con un mensaje claro.
- Se incorporó una tarjeta de colaboración voluntaria con el alias `ocarina.guitarra`. La colaboración no condiciona el acceso gratuito.
- Se renovó la interfaz con una estética rural y comunitaria, mejor contraste, botones redondeados y un paisaje ilustrado en CSS.
- No se aumentó artificialmente el número de descargas: para sumar una obra se requiere verificar el archivo y los derechos de redistribución en Argentina. Project Gutenberg advierte que sus declaraciones de copyright se basan en Estados Unidos y que cada usuario fuera de ese país debe comprobar la legislación local. <https://www.gutenberg.org/policy/terms_of_use> y <https://www.gutenberg.org/policy/license>.


## Nueva colección internacional de ilustración

Se incorporaron 40 archivos SVG originales de Kitbitz, una biblioteca de ilustraciones dibujadas a mano por un equipo internacional y publicadas bajo CC0 1.0. AUTONOMÍA no creó ni redibujó esas obras: conserva los archivos fuente, su procedencia y los créditos colectivos en `archivos/disenos/kitbitz/CREDITOS.md`. Los 27 materiales anteriormente atribuidos a Elías Martínez fueron retirados del catálogo y del repositorio.
