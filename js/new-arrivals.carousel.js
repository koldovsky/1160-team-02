const slides = [
  `<article class="arrivals__carousel-slide">
      <img
        class="arrivals__carousel-image"
        src="img/new-arrivals/arrivals-bowl.png"
        alt="Plastic Bowl"
      />
      <a class="arrivals__carousel-href" href="#">OPTY Plastic Bowl</a>
      <p class="arrivals__carousel-price">$3,00</p>
      <a class="arrivals__carousel-button" href="#">Add to Cart</a>
    </article>`,
  `<article class="arrivals__carousel-slide">
      <img
        class="arrivals__carousel-image"
        src="img/new-arrivals/arrivals-butterfly-toy.png"
        alt="Butterfly Toy"
      />
      <a class="arrivals__carousel-href" href="#">EGO Butterfly Toy</a>
      <p class="arrivals__carousel-price">$8,00</p>
      <a class="arrivals__carousel-button" href="#">Add to Cart</a>
    </article>`,
  `<article class="arrivals__carousel-slide">
      <img
        class="arrivals__carousel-image"
        src="img/new-arrivals/arrivals-crunch-stick.png"
        alt="Crunch Stick"
      />
      <a class="arrivals__carousel-href" href="#"
        >VITALIFE Crunch Sticks Treat</a
      >
      <p class="arrivals__carousel-price">$5,00</p>
      <a class="arrivals__carousel-button" href="#">Add to Cart</a>
    </article>`,
  `<article class="arrivals__carousel-slide">
      <img
        class="arrivals__carousel-image"
        src="img/new-arrivals/arrivals-woven-toy.png"
        alt="Woven Toy"
      />
      <a class="arrivals__carousel-href" href="#">DUNA Woven Toy</a>
      <p class="arrivals__carousel-price">$1,50</p>
      <a class="arrivals__carousel-button" href="#">Add to Cart</a>
    </article>`,
  `<article class="arrivals__carousel-slide">
      <img
        class="arrivals__carousel-image"
        src="img/new-arrivals/arrivals-woven-leash.png"
        alt="Woven Leash"
      />
      <a class="arrivals__carousel-href" href="#">SERA Woven Leash</a>
      <p class="arrivals__carousel-price">$2,00</p>
      <a class="arrivals__carousel-button" href="#">Add to Cart</a>
    </article>`,
];

let currentSlideIndex = 0;

function renderSlide() {
  const slideContainer = document.querySelector(".arrivals__carousel-slides");
  slideContainer.innerHTML = slides[currentSlideIndex];
  if (window.matchMedia("(min-width:767px").matches) {
    const secondSlideIndex = (currentSlideIndex + 1) % slides.length;
    slideContainer.innerHTML += slides[secondSlideIndex];
    if (window.matchMedia("(min-width:991px").matches) {
      const thirdSlideIndex = (currentSlideIndex + 2) % slides.length;
      slideContainer.innerHTML += slides[thirdSlideIndex];
      const fourthSlideIndex = (currentSlideIndex + 3) % slides.length;
      slideContainer.innerHTML += slides[fourthSlideIndex];
    }
  }
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  renderSlide();
}

function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  renderSlide();
}

renderSlide();

const btnNext = document.querySelector(".left-arrow");
btnNext.addEventListener("click", nextSlide);

const btnPrev = document.querySelector(".right-arrow");
btnPrev.addEventListener("click", prevSlide);

window.addEventListener("resize", renderSlide);
