const cards = document.querySelectorAll('.slider-card');

let currentIndex = 1;

function updateSlider(index) {
    cards.forEach((card, i) => {
        card.classList.remove('prev', 'active', 'next');

        if (i === index) {
            card.classList.add('active');
        } else if (i === index - 1 || (index === 0 && i === cards.length - 1)) {
            card.classList.add('prev');
        } else if (i === index + 1 || (index === cards.length - 1 && i === 0)) {
            card.classList.add('next');
        }
    });
}

cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        currentIndex = index;
        updateSlider(currentIndex);
    });
});

// Inicializa el slider
updateSlider(currentIndex);
