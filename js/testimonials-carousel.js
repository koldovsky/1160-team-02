const response = await fetch("api/testimonials-cards.json");
const cardsInfo = await response.json();

const cards = [];

cardsInfo.forEach((card) => {
  cards.push(
    `
    <div class="testimonials-carousel__card">
      <div class="card-img">
        <img
          class="testimonials-carousel__image"
          src="${card.image}"
          alt="${card.alt}"
        />
      </div>
      <h3 class="testimonials-carousel__name">${card.name}</h3>
      <p class="testimonials-carousel__description">
        ${card.description}
      </p>
      <p class="testimonials-carousel__review">
       ${card.review}
      </p>
      <p class="testimonials-carousel__date">${card.date}</p>
    </div>`
  );
});

let currentCardIndex = 0;

function renderCard() {
  const carouselContainer = document.querySelector(".carousel-container");
  carouselContainer.innerHTML = cards[currentCardIndex];
  if (window.matchMedia("(min-width:768px)").matches) {
    const secondCardIndex =
      currentCardIndex + 1 >= cards.length ? 0 : currentCardIndex + 1;
    carouselContainer.innerHTML += cards[secondCardIndex];
    if (window.matchMedia("(min-width:991px)").matches) {
      const thirdCardIndex =
        secondCardIndex + 1 >= cards.length ? 0 : secondCardIndex + 1;
      carouselContainer.innerHTML += cards[thirdCardIndex];
    }
  }
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

window.addEventListener("resize", renderCard);
