document.addEventListener("DOMContentLoaded", () => {
    
    const hero = document.getElementById("hero");
    const heroTitle = document.querySelector(".hero-title");
    
    // 1. Efecto Scroll Premium (Zoom out + Blur)
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        
        // Usamos la altura de la pantalla como referencia para la animación.
        // Cuanto más bajes, más se acerca 'progress' a 1.
        const maxScroll = window.innerHeight; 
        let progress = scrollY / maxScroll;
        
        // Limitamos el progreso para que no pase de 1 (100%) ni baje de 0
        if (progress > 1) progress = 1;
        if (progress < 0) progress = 0;

        // --- Cálculos de animación ---
        // El scale irá de 1 a 0.6 (60%)
        const scale = 1 - (progress * 0.4); 
        // El blur irá de 0 a 10px
        const blur = progress * 10;
        // La opacidad del título irá de 1 a 0 (desaparece un poco más rápido)
        const titleOpacity = 1 - (progress * 1.5);

        // --- Aplicamos los estilos ---
        hero.style.transform = `scale(${scale})`;
        hero.style.filter = `blur(${blur}px)`;
        hero.style.borderRadius = `${progress * 40}px`; // Redondea las esquinas del vídeo al encogerse
        
        if (heroTitle) {
            heroTitle.style.opacity = titleOpacity > 0 ? titleOpacity : 0;
            // Hacemos que el título suba ligeramente al desaparecer
            heroTitle.style.transform = `translate(-50%, calc(-50% - ${progress * 100}px))`; 
        }
    });

    // 2. Aparición elegante de los proyectos (Intersection Observer)
    const projects = document.querySelectorAll(".project");
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const projectObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    projects.forEach(project => {
        projectObserver.observe(project);
    });

    // 3. Lógica de toque para tarjetas en dispositivos móviles
    projects.forEach(project => {
        project.addEventListener("click", function() {
            // Añade o quita la clase "flipped" al tocar la tarjeta
            this.classList.toggle("flipped");
            
            // Opcional: Si quieres que al tocar una, las demás se cierren automáticamente
            projects.forEach(p => {
                if(p !== this) p.classList.remove("flipped");
            });
        });
    });
    // 4. Lógica del Acordeón Cinematográfico
    const accordions = document.querySelectorAll('.accordion-item');

    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            // Comprobamos si el acordeón que acabas de tocar ya estaba abierto
            const isActive = accordion.classList.contains('is-active');

            // 1. Cerramos todos los acordeones primero y pausamos todos los vídeos
            accordions.forEach(acc => {
                acc.classList.remove('is-active');
                const video = acc.querySelector('video');
                if(video) video.pause(); // Cuidamos el rendimiento del navegador
            });

            // 2. Si el acordeón que tocaste NO estaba abierto, lo abrimos y le damos al Play
            if (!isActive) {
                accordion.classList.add('is-active');
                const video = accordion.querySelector('video');
                if(video) {
                    video.currentTime = 0; // Opcional: rebobina el vídeo al principio
                    video.play();
                }
            }
        });
    });

    const videoRole = document.querySelectorAll(".video-role");
    
    videoRole.forEach( video => {

        video.parentElement.addEventListener("mouseenter", () => {
            video.play();
        })

        video.parentElement.addEventListener("mouseleave", () => {
            video.pause();
        })
        

    })

});
function loadVideo(videoId) {
const container = document.getElementById('video-wrapper');

// Creamos el iframe dinámicamente
const iframe = document.createElement('iframe');

iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`);
iframe.setAttribute('frameborder', '0');
iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
iframe.setAttribute('allowfullscreen', 'true');
iframe.style.width = '560px';
iframe.style.height = '315px';


// Limpiamos el contenedor (quitamos imagen y botón) y metemos el iframe
container.innerHTML = '';
container.appendChild(iframe);
}