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

## Estado del catálogo · versión 0.7.6

- **55 fichas** registradas.
- **6 archivos publicados** y alojados localmente en `archivos/libros/`.
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

Las seis obras están en dominio público en Argentina según el plazo general aplicable a sus autores. En cinco archivos de Project Gutenberg se conserva íntegra la licencia del proyecto; en `El matadero` se incluye atribución a Wikisource y el enlace a CC BY-SA 4.0. La situación de cada obra y de cada transcripción se registra por separado: que una obra original sea de dominio público no vuelve automáticamente libre cualquier edición, traducción, prólogo, fotografía o ilustración.

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
- `styles.css`: diseño adaptable y accesibilidad.
- `app.js`: búsqueda, filtros y validación de archivos locales.
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
