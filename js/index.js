function init() {
  import('./burger-button.js');
  import('./new-arrivals.carousel.js'); /*Няйко*/
  import('./index.promotion-timer.js'); /*Леонович*/
  import('./testimonials-carousel.js'); /*Наконечний*/
  import('./index.call-us.sale-week.countdown.js'); /*Курилін*/
  import('./common.footer.copyright.clock.js'); /*Курилін*/
  import('./dry-food.js'); /*Зоценко*/
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
