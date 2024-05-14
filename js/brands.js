const slides = [
    `<li class="car__brandslide"><img src="img/brands/brand_applaws_logo.png" alt="Brand Applaws logo" class="car__image"></li>`,
    `<li class="car__brandslide"><img src="img/brands/brand_dokas.png" alt="Brand Dokas logo" class="car__image"></li>`,
    `<li class="car__brandslide"><img src="img/brands/brand_felix_logo.png" alt="Brand Felix logo" class="car__image"></li>`,
    `<li class="car__brandslide"><img src="img/brands/brand_gourmet_logo.png" alt="Brand Gourmet logo" class="car__image"></li>`,
    `<li class="car__brandslide"><img src="img/brands/brand_purizon_logo.png" alt="Brand Purizon logo" class="car__image"></li>`,
    `<li class="car__brandslide"><img src="img/brands/brand_rocco_logo.png" alt="Brand Rocco logo" class="car__image"></li>`,
    `<li class="car__brandslide"><img src="img/brands/brand_tigerino_logo.png" alt="Brand Tigerino logo" class="car__image"></li>`
];
let currentSlideIdx = 0;
function renderSlide() {
    const slideContainer = document.querySelector('.car__track');
    slideContainer.innerHTML = slides[currentSlideIdx];
    const maxVisibleSlides = 3; // Максимальна кількість видимих слайдів
    const startSlideIndex = currentSlideIdx % slides.length; // Індекс першого видимого слайда

    // Додаємо кожен слайд у список
    for (let i = 0; i < maxVisibleSlides; i++) {
        const slideIndex = (startSlideIndex + i) % slides.length;
        slideContainer.innerHTML += slides[slideIndex];
    }
    if (window.matchMedia('(min-width:768px)').matches) {
        const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.matchMedia('(min-width:980px)').matches) {
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];
        }
    }
}
function nextSlide() {
    currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    renderSlide();
}
function prevSlide() {
    currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
    renderSlide();
}
//setInterval(prevSlide, 3000);
renderSlide();
const btnNext = document.querySelector(".carousel__button--left");
btnNext.addEventListener('click', nextSlide);

const btnPrev = document.querySelector(".carousel__button--right");
btnPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);