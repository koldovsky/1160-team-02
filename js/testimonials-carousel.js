const cards = [
  `
  <div class="testimonials-carousel__card">
    <div class="card-img">
      <img
        class="testimonials-carousel__image"
        src="img/testimonials-images/client-images/douglas_r.webp"
        alt="Douglas foto"
      />
    </div>
    <h3 class="testimonials-carousel__name">Douglas Wright</h3>
    <p class="testimonials-carousel__description">
      and his gorgeous cat named Billy
    </p>
    <p class="testimonials-carousel__review">
      “I often order food for my cat from this store as they offer free
      shipping. The prices here are quite low, and you can order a lot of
      great goods by top manufacturers.”
    </p>
    <p class="testimonials-carousel__date">December 15, 2021</p>
  </div>`,

  `
  <div class="testimonials-carousel__card">
    <div class="card-img">
      <img
        class="testimonials-carousel__image"
        src="img/testimonials-images/client-images/diana_p.webp"
        alt="Diana foto"
      />
    </div>
    <h3 class="testimonials-carousel__name">Diana Peterson</h3>
    <p class="testimonials-carousel__description">
      with Cooper,her lovely dog
    </p>
    <p class="testimonials-carousel__review">
      “My Cooper is already 10 years old and for the last 3 years, I have
      been ordering food, new leashes, and vitamins only at Happy Paw.
      They sell really high-quality goods!"
    </p>
    <p class="testimonials-carousel__date">February 02, 2022</p>
  </div>`,

  `
  <div class="testimonials-carousel__card">
    <div class="card-img">
      <img
        class="testimonials-carousel__image"
        src="img/testimonials-images/client-images/john_and_mery.webp"
        alt="John and Merry foto"
      />
    </div>
    <h3 class="testimonials-carousel__name">John and Mary Roberts</h3>
    <p class="testimonials-carousel__description">
      and their cool rabbit named Snowball
    </p>
    <p class="testimonials-carousel__review">
      “When we bought Snowball, Mary was very happy, but there were also
      many questions — we needed a cage, cleaning products, hay, etc. But
      we easily found all this in Happy Paw! ”
    </p>
    <p class="testimonials-carousel__date">March 28, 2022</p>
  </div>`,

  `
  <div class="testimonials-carousel__card">
    <div class="card-img">
      <img
        class="testimonials-carousel__image"
        src="img/testimonials-images/client-images/dean_w.webp"
        alt="Dean foto"
      />
    </div>
    <h3 class="testimonials-carousel__name">Dean Williamson</h3>
    <p class="testimonials-carousel__description">
      with Booper,the star of his instagram
    </p>
    <p class="testimonials-carousel__review">
      “Booper gets all the best from me and the Happy Paw store! I often
      treat him with some new toys, decorations for his cage, etc. I
      absolutely trust Happy Paw.”
    </p>
    <p class="testimonials-carousel__date">May 05, 2022</p>
  </div>`,
];

let currentCardIndex = 0;

function renderCard() {
  const carouselContainer = document.querySelector(".testimonials-carousel");
  carouselContainer.innerHTML = cards[currentCardIndex];
}

function nextCard() {
  currentCardIndex =
    currentCardIndex + 1 >= cards.length ? 0 : currentCardIndex + 1;
  renderCard();
}

function prevCard() {
  currentCardIndex =
    currentCardIndex - 1 < 0 ? cards.length - 1 : currentCardIndex - 1;
  renderCard();
}

// setInterval(nextCard, 3000);
renderCard();

const rightBtn = document.querySelector(".right-btn");
rightBtn.addEventListener("click", nextCard);

const leftBtn = document.querySelector(".left-btn");
leftBtn.addEventListener("click", prevCard);
