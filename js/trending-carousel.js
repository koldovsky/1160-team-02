const slides = [
    `<article class="trending_carousel-slide">
      <img class="trending__carousel-image" src="img/trending-products-images/pet-brush.png" alt="Dora Metal Pet Brush">
      <a class="trending__carousel-link" href="#">DORA Metal Pet Brush</a>
      <p class="trending__carousel-price">$15,00</p>
      <a class="trending_carousel-button" href="#"></a>
      <span class="trending__carousel-button-text">Add to Cart</span>
    </article>`,
   
    `<article class="trending_carousel-slide">
      <img class="trending__carousel-image" src="img/trending-products-images/heaven-set.png" alt="Kitten Heaven Set">
      <a class="trending__carousel-link" href="#">Kitten's Heaven Set</a>
      <p class="trending__carousel-price">$12,00</p>
      <a class="trending_carousel-button" href="#"></a>
      <span class="trending__carousel-button-text">Add to Cart</span>
    </article>`,
   
    `<article class="trending_carousel-slide">
      <img class="trending__carousel-image" src="img/trending-products-images/opty-pet-carrier.png" alt="OPTY Pet Carrier">
      <a class="trending__carousel-link" href="#">OPTY Pet Carrier</a>
      <p class="trending__carousel-price">$8,00</p>
      <a class="trending_carousel-button" href="#"></a>
      <span class="trending__carousel-button-text">Add to Cart</span>
    </article>`,
    
    `<article class="trending_carousel-slide">
      <img class="trending__carousel-image" src="img/trending-products-images/rope-toy.png" alt="AGA Rope Toy">
      <a class="trending__carousel-link" href="#">AGA Rope Toy</a>
      <p class="trending__carousel-price">$5,00</p>
      <a class="trending_carousel-button" href="#"></a>
      <span class="trending__carousel-button-text">Add to Cart</span>
    </article>`,
    
    `<article class="trending_carousel-slide">
      <img class="trending__carousel-image" src="img/trending-products-images/dora-pet-carrier.png" alt="DORA Pet Carrier">
      <a class="trending__carousel-link" href="#">DORA Pet Carrier</a>
      <p class="trending__carousel-price">$23,00</p>
      <a class="trending_carousel-button" href="#"></a>
      <span class="trending__carousel-button-text">Add to Cart</span>
    </article>`
  ];
  
  let currentSlideIndex = 0;
  
  function renderSlide() {
    const slideContainer = document.querySelector(".trending-slides-carousel");
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
  
  const btnNext = document.querySelector(".trending__left-arrow");
  btnNext.addEventListener("click", nextSlide);
  
  const btnPrev = document.querySelector(".trending__right-arrow");
  btnPrev.addEventListener("click", prevSlide);
  
  window.addEventListener("resize", renderSlide);