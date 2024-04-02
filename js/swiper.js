const pics = [
    `<article class="product__slides">
        <h3>For Hamsters→</h3>
        <img class="carrousel__slide" src="/img/food-stuff-products/humster-pic.png" alt="Humster photo">
        <span class="text-content">Food • Soft &amp; Chewy Treats • Litter • Furniture • Collars and Leashes • Bowls • Toys • Beds •&nbsp;</span>
    </article>`,
    `<article class="product__slides">
        <h3>For Cats→</h3>
        <img class="carrousel__slide" src="/img/food-stuff-products/cat-pic.png" alt="Cat photo">
        <span class="text-content">Dry Food • Wet Food • Treats • Catnip &amp; Grass • Litter Boxes  • Bowls &amp; Feeders • Toys • Beds  •&nbsp;</span>
    </article>`,
    `<article class="product__slides">
        <h3>For Dogs→</h3>
        <img class="carrousel__slide" src="/img/food-stuff-products/dog-pic.png" alt="Dog photo">
        <span class="text-content">Dry &amp; Canned Food • Jerky • Chewy Treats • Bowls • Toys • Collars and Leashes • Clothes •</span>
    </article>`,
    `<article class="product__slides">
        <h3>For Parrots→</h3>
        <img class="carrousel__slide" src="/img/food-stuff-products/parrot-pic.png" alt="Parrot photo">
        <span class="text-content">Food • Treats • Cages &amp; Stands • Vitamins • Bowls &amp; Feeders • Litter &amp; Nesting • Odor Control •</span>
    </article>`,
    `<article class="product__slides">
        <h3>For Rabbits→</h3>
        <img class="carrousel__slide" src="/img/food-stuff-products/rabbit-pic.png" alt="Rabbit photo">
        <span class="text-content">Food • Treats • Hay • Cages • Litter &amp; Bedding • Harnesses • Toys • Odor Removers •&nbsp;</span>
    </article>`,
    `<article class="product__slides">
        <h3>For Fish→</h3>
        <img class="carrousel__slide" src="/img/food-stuff-products/fish-pic.png" alt="Fish photo">
        <span class="text-content">Food • Feeders • Aquariums • Filters &amp; Pumps • Cleaning  • Water Care • Decor •</span>
    </article>`
    ]
    
    let curSlideId = 0;
    function renderSlide(){
        const slideContainer = document.querySelector(`.swiper-pic`);
        slideContainer.innerHTML = pics[curSlideId];
        const secondSlideId = curSlideId + 1 >= pics.length ? 0 : curSlideId + 1;
        slideContainer.innerHTML += pics[secondSlideId];
        if(window.matchMedia('(min-width:768px)').matches){
            
            const thirdSlideId = secondSlideId + 1 >= pics.length ? 0 : secondSlideId + 1;
            slideContainer.innerHTML += pics[thirdSlideId];
            if(window.matchMedia('(min-width:980px)').matches){
            const forthSlideId = thirdSlideId + 1 >= pics.length ? 0 : thirdSlideId + 1;
            slideContainer.innerHTML += pics[forthSlideId];
            }
            
        }
        
    }
    
    function nextSlide(){
        curSlideId = curSlideId + 1 >= pics.length ? 0 : curSlideId + 1;
        renderSlide();
    }
    
    function prevSlide(){
        curSlideId = curSlideId - 1 < 0 ? pics.length - 1 : curSlideId - 1;
        renderSlide();
    }
    
    renderSlide();
    
    const btnNext = document.querySelector('.next-arrow');
    btnNext.addEventListener('click', nextSlide);
    
    const btnPrev = document.querySelector('.prev-arrow');
    btnPrev.addEventListener('click', prevSlide);