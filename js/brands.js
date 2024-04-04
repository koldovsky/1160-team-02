const slides = [
  `<li class="car__brandslide"><img src="../img/brands/brand_applaws_logo.png" alt="Brand Applaws logo" class="car__image"></li>`,
  `<li class="car__brandslide"><img src="../img/brands/brand_dokas.png" alt="Brand Dokas logo" class="car__image"></li>`,
  `<li class="car__brandslide"><img src="../img/brands/brand_felix_logo.png" alt="Brand Felix logo" class="car__image"></li>`,
  `<li class="car__brandslide"><img src="../img/brands/brand_gourmet_logo.png" alt="Brand Gourmet logo" class="car__image"></li>`,
  `<li class="car__brandslide"><img src="../img/brands/brand_purizon_logo.png" alt="Brand Purizon logo" class="car__image"></li>`,
  `<li class="car__brandslide"><img src="../img/brands/brand_rocco_logo.png" alt="Brand Rocco logo" class="car__image"></li>`,
  `<li class="car__brandslide"><img src="../img/brands/brand_tigerino_logo.png" alt="Brand Tigerino logo" class="car__image"></li>`,
];

let currentSlideIdx = 0;

function calculateVisibleSlides() {
  if (window.matchMedia("(min-width:1200px)").matches) {
    return 6;
  } else if (
    window.matchMedia("(min-width:980px) and (max-width:1199px)").matches
  ) {
    return 5;
  } else if (
    window.matchMedia("(min-width:768px) and (max-width:979px)").matches
  ) {
    return 4;
  } else if (
    window.matchMedia("(min-width:600px) and (max-width:767px)").matches
  ) {
    return 3;
  } else if (
    window.matchMedia("(min-width:481px) and (max-width:599px)").matches
  ) {
    return 2;
  }
  return 1;
}

function renderSlide() {
  const slideContainer = document.querySelector(".car__track");
  slideContainer.innerHTML = "";

  let maxVisibleSlides = calculateVisibleSlides();

  for (let i = 0; i < slides.length && i < maxVisibleSlides; i++) {
    let slideIndex = (currentSlideIdx + i) % slides.length;
    slideContainer.innerHTML += slides[slideIndex];
  }
}

function nextSlide() {
  currentSlideIdx = (currentSlideIdx + 1) % slides.length;
  renderSlide();
}

function prevSlide() {
  currentSlideIdx = (currentSlideIdx - 1 + slides.length) % slides.length;
  renderSlide();
}

renderSlide();
document
  .querySelector(".carousel__button--left")
  .addEventListener("click", prevSlide);
document
  .querySelector(".carousel__button--right")
  .addEventListener("click", nextSlide);
window.addEventListener("resize", renderSlide);
