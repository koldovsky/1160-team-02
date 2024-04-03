let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.car__brandslide');
    const track = document.querySelector('.car__track');
    let slideWidthIncludingMargin = slides[0].offsetWidth + 30; // Assuming 30px is the gap

    slideIndex += step;
    slideIndex = Math.max(0, Math.min(slideIndex, slides.length - 6)); // Prevent going beyond the visible range

    track.style.transform = `translateX(-${slideWidthIncludingMargin * slideIndex}px)`;
}
