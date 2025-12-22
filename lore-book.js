// ==========================
// CONTENIDO DEL LIBRO
// ==========================

// Cada posición del array es una "página"
const pages = [
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    "ccccccccccccccccccccccccccccccccc cccccccccccccccccccccccccccccccccccc"
];

let currentPage = 0;

const loreText = document.getElementById("lore-text");
const prevBtn = document.querySelector(".lore-prev");
const nextBtn = document.querySelector(".lore-next");
const pageIndicator = document.getElementById("lore-page-indicator");

function updatePage() {
    // Desvanecer texto
    loreText.classList.add("fade-out");

    setTimeout(() => {
        // Cambiar contenido
        loreText.textContent = pages[currentPage];
        pageIndicator.textContent = `Página ${currentPage + 1} / ${pages.length}`;

        // Botones
        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = currentPage === pages.length - 1;

        // Volver a mostrar
        loreText.classList.remove("fade-out");
    }, 400); // mismo tiempo que el transition
}

// Eventos
prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        updatePage();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updatePage();
    }
});

// Inicializar libro
updatePage();