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
8. No se altera el archivo original. Se conserva autoría, procedencia, atribución, licencia y avisos exigidos.
9. No se inventan archivos ni se producen materiales para completar estantes. Es preferible publicar pocos archivos correctos.

## Estado unificado · versión 0.7.0

Las ramas de trabajo anteriores desarrollaron distintas etapas de AUTONOMÍA. La rama principal ya contenía la colección ampliada de 49 fichas. Esta actualización conserva esas referencias como material de investigación, pero corrige la diferencia entre una ficha que apunta a otro sitio y un archivo realmente disponible dentro de AUTONOMÍA.

- 49 referencias de materiales y servicios investigados, conservadas en catalogo.json.
- 0 archivos habilitados para descarga local en esta actualización.
- Las 49 referencias quedan marcadas en_revision, sin ruta local y sin derechos de redistribución confirmados.
- El sitio solo muestra un archivo cuando tiene una ruta local válida dentro de archivos/, publicationStatus: publicado y rightsVerified: true.
- Los enlaces externos se conservan como procedencia editorial en sourceUrl; no se usan como botones de acceso o descarga.
- Se reparó un carácter literal que había quedado en el HTML.
- Se mantiene el diseño adaptable, los filtros, la búsqueda y la estructura estática.

**Importante:** no se han copiado automáticamente las 49 obras. Hacerlo sin verificar la licencia de cada edición o documento podría vulnerar derechos de autor. La obra original puede estar en dominio público y aun así una edición, traducción, prólogo, fotografía o digitalización puede tener derechos propios.

## Cómo publicar un archivo

Antes de incorporar una obra:

1. Identificar el archivo exacto y su autor o institución.
2. Verificar el permiso de redistribución aplicable en Argentina: dominio público, licencia compatible o autorización expresa.
3. Revisar si existen derechos adicionales de edición, traducción, ilustración, fotografía o terceros.
4. Descargar el archivo original autorizado y guardarlo dentro de archivos/, en una carpeta por tipo.
5. No modificar el contenido original.
6. Completar la ficha con autoría, procedencia, licencia, atribución y fecha de verificación.
7. Recién entonces establecer publicationStatus: publicado, filePath: archivos/categoria/archivo.pdf y rightsVerified: true.

No usar rutas externas, absolutas ni que salgan de archivos/. No completar los tres campos de publicación hasta que el archivo esté efectivamente incorporado y los permisos comprobados.

## Estructura del proyecto

- index.html: portada y biblioteca pública.
- styles.css: diseño adaptable y accesibilidad.
- app.js: búsqueda, filtros y validación de archivos locales.
- catalogo.json: metadatos de referencias y archivos publicados.
- archivos/: copias autorizadas para descarga directa.

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

GitHub Pages puede publicar la raíz de main si está habilitado en la configuración del repositorio. Esta actualización no confirma por sí sola que Pages esté activo ni que el sitio público se haya actualizado.

## Principio de crecimiento

**No creamos. Encontramos. Verificamos. Ordenamos. Acercamos.**

La cantidad no es el objetivo. La confianza y la descarga directa sí.
