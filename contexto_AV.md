# Contexto del Proyecto: Portfolio Cinematográfico AV (Actualizado)

## 1. Visión General y Filosofía de Diseño
* **Perfil del Usuario:** Profesional híbrido 360º (Director Creativo, Project / Producer Manager, Editor).
* **Estética:** "Alta costura", cinematográfico, editorial, minimalista. 
* **Tipografía:** `Helvetica Neue` (Pesos 300 para cuerpos grandes, 500/600 para metadatos técnicos).

## 2. Stack Tecnológico
* **CMS:** October CMS (Twig templates).
* **Lenguajes:** HTML5, SCSS, Vanilla JavaScript (ES6).
* **Optimización:** Carga bajo demanda de recursos pesados (iFrames).

## 3. Estructura de la Web y Funcionalidades Core

### A. Navbar (Menú Superior)
* Flexbox, `backdrop-filter: blur(10px)`. Logo a la izquierda, links a la derecha. Totalmente independiente de frameworks.

### B. Hero Section (Scroll-driven)
* Background video fijo con efecto dinámico de `scale` y `blur` basado en la posición del scroll (`window.scrollY`).

### C. Sección de Proyectos (Optimización de Vídeo)
* **Técnica:** "Fake Posters". 
* **Funcionamiento:** Se muestra una imagen estática con un evento `onclick`.
* **Carga:** Al hacer clic, JavaScript sustituye dinámicamente la imagen por el código `embed` de YouTube. Esto evita cargar scripts de terceros al inicio y mejora drásticamente el rendimiento de la web.

### D. Galería de Tarjetas de Interacción (Antes Diagonales)
* **Diseño:** 3 tarjetas rectangulares minimalistas.
* **Comportamiento Hover (JS):**
    * `mouseenter`: El vídeo interno ejecuta `.play()` y la descripción/overlay aparece con un efecto `fade-in`.
    * `mouseleave`: El vídeo ejecuta `.pause()`, se resetea con `.currentTime = 0` y la descripción desaparece con `fade-out`.
* **Imagen de reserva:** Uso del atributo `poster` en el vídeo para mostrar el frame inicial.

### E. Perfil y Pilares (Manifiesto)
* Texto principal: "Especialista en la gestión integral...".
* Estructura de 3 columnas para los pilares: Dirección Creativa, Producción/Management, Montaje/Post.
* Metadatos de envergadura: Muestra datos de equipo (PAX), días de rodaje y volumen de entregables.

### F. Footer Premium (VIP CTA)
* Gran titular **"Let's Talk."** con enlace `mailto:`.
* Enlaces secundarios a **WhatsApp Directo** y **LinkedIn Profile**.
* Ubicación: "Barcelona — Disponible internacionalmente".

## 4. Pendientes / Siguientes Pasos
* Integración final de contenidos reales en las tarjetas de interacción.
* Revisión de responsive para los nuevos componentes de vídeo.