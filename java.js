const searchInput = document.getElementById("searchInput");
const projectCards = document.querySelectorAll(".project-card");
const detailsLinks = document.querySelectorAll(".details-link");

// Filtro de projetos
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    projectCards.forEach(card => {
        const title = card.querySelector(".project-title").textContent.toLowerCase();
        const desc = card.querySelector(".project-desc").textContent.toLowerCase();
        if (title.includes(query) || desc.includes(query)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// Mostrar modal ao clicar em detalhes
detailsLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const project = link.getAttribute("data-project");
        let modalId = "";
        if (project === "appFaculdade") {
            modalId = "modalAppFaculdade";
        } else if (project === "siteFinancas") {
            modalId = "modalSiteFinancas";
        }

        if (modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = "flex";
            }
        }
    });
});

// Fechar modal ao clicar em × ou fora do modal
document.addEventListener("click", (e) => {
    if (e.target.matches("[data-close]") || e.target.classList.contains("modal-overlay")) {
        const modals = document.querySelectorAll(".modal-overlay");
        modals.forEach(m => m.style.display = "none");
    }
});
