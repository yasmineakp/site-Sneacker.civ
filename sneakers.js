function afficherFormulaire() {
    document.getElementById("monFormulaire").style.display = "flex";
}

function fermerFormulaire() {
    document.getElementById("monFormulaire").style.display = "none";
}

function validerCommande() {
    alert("Commande envoyée 🚀");
    fermerFormulaire();
}

/* ANIMATION AU SCROLL */
const cards = document.querySelectorAll(".card-3d");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.style.transform = "rotateY(0deg) rotateX(0deg)";
            card.style.opacity = "1";
        }
    });
});