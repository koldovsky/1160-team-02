function init() {
  // please, add element names in the end of file-names if u dont mind, thx

  /*import('./common.header-nav.js'); /*Новікова*/
  /*import('./index.hero.js'); /*Новікова*/
  /*import('./index.food-and-stuff.js'); /*Марченко*/
  /*import('./index.about-us.js'); /*Чемісов*/
  /*import('./index.trending-products.js'); /*Мачіха*/
  /*import ("./index.brands.js"); /*Кундукова*/
  import('./new-arrivals-partial'); /*Няйко*/
  /*import('./index.new-arrivals.js'); /*Няйко*/
  /*import('./index.promotion.js'); /*Леонович*/
  /*import('./index.recommendations.js'); /*Дерев'янко*/
  import('./testimonials-carousel.js'); /*Наконечний*/
  /*import('./index.dry-food.js'); /*Зоценко*/
  /*import('./index.featured-product.js'); /*Никифорчин*/
  /*import('./index.news-articles.js'); /*Калюжний*/
  /*import("./index.call-us.js"); /*Курилін*/
  /*import('./common.footer.js'); /*Курилін*/
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
