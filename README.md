# Portfolio Cinematográfico - Dirección y Producción AV 🎬

Un portfolio web de "alta costura" diseñado específicamente para perfiles de Project Management Audiovisual, Dirección y Producción. Destaca por su enfoque editorial, minimalismo y transiciones fluidas (*smooth as butter*), poniendo el foco absoluto en la calidad de las piezas audiovisuales y el contexto técnico de cada proyecto.

Desarrollado sobre la arquitectura de **October CMS**.

## ✨ Características Principales

* 🎥 **Hero Dinámico (Scroll-driven):** El vídeo de cabecera reacciona al scroll del usuario, aplicando un efecto de escala (zoom-out) y desenfoque (blur) calculados matemáticamente a través de la tarjeta gráfica (GPU) para evitar tirones.
* 🃏 **Galería 3D (Featured Projects):** Tarjetas interactivas con efecto *flip* en espacio 3D real. Muestran el plano final en el anverso y los detalles técnicos/descripción en el reverso. Optimizadas para interacción táctil en dispositivos móviles.
* 🎬 **Acordeón Cinematográfico:** Un índice de proyectos estilo "Call Sheet" o documento técnico. Al hacer clic, la fila se expande fluidamente utilizando las últimas especificaciones de CSS Grid (`grid-template-rows`).
* ⚡ **Rendimiento Inteligente:** Los vídeos del acordeón solo se reproducen cuando su panel está abierto, y se pausan automáticamente al cerrarlo, ahorrando batería y datos al usuario.
* 📱 **100% Responsive:** Diseño adaptable ("Mobile First" considerado) con uso de Media Queries y etiqueta `viewport` para asegurar una legibilidad perfecta de la tipografía técnica en cualquier pantalla.

## 🛠️ Stack Tecnológico

* **Plataforma:** October CMS (Plantillas con sintaxis Twig)
* **Estructura:** HTML5 semántico
* **Estilos:** SCSS / CSS3 (Animaciones, CSS Grid, 3D Transforms)
* **Interactividad:** Vanilla JavaScript (ES6)
    * Uso de `IntersectionObserver` para revelar elementos elegantemente al hacer scroll.
    * Cálculos en tiempo real basados en `window.scrollY`.
    * Manipulación dinámica del DOM (`classList`).

## 📁 Archivos Clave

El núcleo de la personalización visual e interactiva reside en estos tres archivos dentro del tema de October CMS:

* `home.htm`: Contiene el marcado semántico y las etiquetas de Twig (`{{ '...' | theme }}`) para la inyección de *assets*.
* `app.scss`: Centraliza todo el diseño, la lógica 3D de las tarjetas, el diseño editorial del acordeón y las Media Queries.
* `main.js`: Controla las matemáticas del scroll del Hero, la observación de las tarjetas de la galería y la lógica de *Play/Pause* automático del acordeón cinematográfico.

## 🚀 Instalación y Uso

1. Copia los archivos dentro de la carpeta de tu tema activo en October CMS (habitualmente en `/themes/tu-tema/`).
2. Asegúrate de compilar el archivo `app.scss` a un archivo `.css` normal para que el navegador pueda leerlo (puedes usar el compilador integrado de October CMS o herramientas externas como Webpack/Gulp).
3. Verifica que tu archivo `layout/default.htm` incluye la etiqueta `<meta name="viewport" content="width=device-width, initial-scale=1.0">` en el `<head>` para garantizar el diseño responsive.
4. Sube tus vídeos e imágenes a la carpeta `/assets/` de tu tema y actualiza las rutas en el HTML.

---
*Diseñado con el foco puesto en la narrativa visual y el proceso de producción.*