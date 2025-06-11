const cards = document.querySelectorAll('.cardProjeto');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function updateCards() {
    cards.forEach((card, index) => {
    card.classList.toggle('active', index === currentIndex);
    });

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === cards.length - 1;
}

function showNextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCards();
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
    currentIndex--;
    updateCards();
    resetAutoSlide();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
    currentIndex++;
    } else {
    currentIndex = 0;
    }
    updateCards();
    resetAutoSlide();
});

updateCards();
startAutoSlide(); // Inicia o auto slide
