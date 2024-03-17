document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".testimonials-carousel__card");
    const leftButton = document.querySelector(".left-btn");
    const rightButton = document.querySelector(".right-btn");
    let currentIndex = 0;
  
    function showCurrentSlide() {
      cards.forEach((card, index) => {
        if (
          index >= currentIndex &&
          index < currentIndex + getVisibleCardsCount()
        ) {
          card.computedStyleMap.display = "block";
        } else {
          card.computedStyleMap.display = "none";
        }
      });
    }
  
    function getVisibleCardsCount() {
      if (window.matchMedia("(min-width: 991px)").matches) {
        return 3;
      } else if (window.matchMedia("(min-width: 767px)").matches) {
        return 2;
      } else {
        return 1;
      }
    }
  
    function changeSlide(direction) {
      currentIndex += direction * getVisibleCardsCount();
  
      if (currentIndex < 0) {
        currentIndex = 0;
      } else if (currentIndex > cards.length) {
        currentIndex = cards.length - getVisibleCardsCount();
      }
      showCurrentSlide();
    }
  
    leftButton.addEventListener("click", () => changeSlide(-1));
    rightButton.addEventListener("click", () => changeSlide(1));
  
    showCurrentSlide();
  });
  