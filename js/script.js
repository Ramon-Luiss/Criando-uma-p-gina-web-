document.addEventListener('DOMContentLoaded', () => {
    // Menu Hamburger Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    if (menuToggle && menu) { // Verifica se os elementos existem
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('open'); // Alterna a classe 'open' para mostrar/ocultar o menu
        });
    } else {
        console.error("Elementos 'menu-toggle' ou 'menu' não foram encontrados.");
    }

    // Carrossel de Imagens
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-images img');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none'; // Mostra apenas o slide atual
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Mostra o primeiro slide ao carregar
    showSlide(currentSlide);
});
