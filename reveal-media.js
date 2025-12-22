// ==========================
// REVEAL MEDIA ON SCROLL
// ==========================

// Seleccionamos todos los elementos que queremos animar
const revealElements = document.querySelectorAll('.reveal-media');

// Creamos el observer
const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Cuando entra en pantalla
                entry.target.classList.add('is-visible');

                // Dejamos de observarlo (no vuelve a animarse)
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.3 // porcentaje visible para activarse
    }
);

// Observamos cada elemento
revealElements.forEach(el => observer.observe(el));