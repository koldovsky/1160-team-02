function init() {
  /*import('./common.header-nav.css'); /*Новікова*/
  /*import('./index.hero.css'); /*Новікова*/
  /*import('./index.food-and-stuff.css'); /*Марченко*/
  /*import('./index.about-us.css'); /*Чемісов*/
  /*import('./index.trending-products.css'); /*Мачіха*/
  /*import ("./index.brands.css"); /*Кундукова*/
  import('./new-arrivals-partial'); /*Няйко*/
  /*import('./index.new-arrivals.css'); /*Няйко*/
  /*import('./index.promotion.css'); /*Леонович*/
  /*import('./index.recommendations.css'); /*Дерев'янко*/
  import('./testimonials-carousel'); /*Наконечний*/ //import('./index.testimonials-carousel.css');
  /*import('./index.testimonials.css'); /*Наконечний*/
  /*import('./index.dry-food.css'); /*Зоценко*/
  /*import('./index.featured-product.css'); /*Никифорчин*/
  /*import('./index.news-articles.css'); /*Калюжний*/
  /*import ("./index.call-us.css"); /*Курилін*/
  /*import('./common.footer.css'); /*Курилін*/
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
