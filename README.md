# Web Corporativa

## Descripción breve

Este proyecto consiste en una pequeña web corporativa estática para una empresa que presenta sus productos, investigación, misión, noticias y formulario de contacto. La interfaz está construida con componentes reutilizables y un diseño moderno con Tailwind CSS, con navegación entre páginas de contenido corporativo.

## Tecnologías empleadas

- HTML5 para la estructura de las páginas.
- CSS y Tailwind CSS para el diseño visual y la apariencia responsive.
- JavaScript para la carga dinámica de componentes y la gestión del cambio de idioma.
- JSON para almacenar los textos de cada idioma.
- BrowserSync, Concurrently y Tailwind CLI para el flujo de desarrollo local.

## Estructura del proyecto

El proyecto cuenta con varias páginas HTML:

- `index.html`: página principal de inicio.
- `quienesSomos.html`: página de presentación de la empresa y el equipo.
- `research.html`: página dedicada a la investigación y publicaciones.
- `notices.html`: página de noticias y comunicaciones.
- `contact.html`: página de contacto.

Además, el proyecto organiza el contenido en componentes reutilizables dentro de `src/components/`, que se cargan mediante `src/js/loadComponents.js`.

## Secciones de la página web

La web corporativa está compuesta por varias secciones visuales y páginas:

1. Header y navegación principal.
2. Hero o artículo principal con descripción corporativa.
3. Sección de productos o servicios.
4. Sección de misión y valores de la empresa.
5. Sección de publicaciones e investigación.
6. Sección de testimonios o feedback.
7. Sección de últimas noticias.
8. Footer con información corporativa y enlaces útiles.
9. Páginas específicas para Quienes Somos, Investigación, Noticias y Contacto.

## Cambio de idioma

El cambio de idioma se implementa con una solución sencilla basada en JavaScript y archivos JSON:

- El archivo `src/js/i18n.js` contiene la lógica de carga de idioma.
- La función `loadLang(lang)` realiza una petición con `fetch('lang/${lang}.json')` para obtener el archivo de traducciones en español o inglés.
- El contenido HTML usa atributos `data-key` para identificar cada texto traducible.
- La función `applyTranslations()` recorre todos los elementos con `data-key` y reemplaza su `textContent` con el valor correspondiente del JSON.
- La función `setLang(lang)` permite cambiar el idioma desde la interfaz, y el idioma seleccionado se guarda en `localStorage`.

La navegación de idiomas se muestra en el componente de cabecera, donde aparecen los enlaces `ES` y `EN` para seleccionar el idioma.

## Ejecutar el proyecto

Para iniciar el proyecto en modo desarrollo, se puede usar el script definido en `package.json`:

```bash
npm run dev
```

Esto activa Tailwind CSS en modo watch y BrowserSync para servir la web localmente.
