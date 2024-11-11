  let currentSlide = 0;
  const slides = document.querySelectorAll('.hero-slide');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
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

  // Auto-play
  setInterval(nextSlide, 5000); // Altere o tempo, se necessário

  let currentProductSlide = 0;
  const productSlides = document.querySelectorAll('.product-slide-b');

  function showProductSlide(index) {
    productSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextProductSlide() {
    currentProductSlide = (currentProductSlide + 1) % productSlides.length;
    showProductSlide(currentProductSlide);
  }

  function prevProductSlide() {
    currentProductSlide = (currentProductSlide - 1 + productSlides.length) % productSlides.length;
    showProductSlide(currentProductSlide);
  }

  // Auto-play
  setInterval(nextProductSlide, 5000); // Ajuste o tempo conforme necessário
