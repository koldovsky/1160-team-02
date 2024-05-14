function init() {
  import("./burger-button.js");
  import("./new-arrivals.carousel.js"); /*Няйко*/
  import("./index.promotion-timer.js"); /*Леонович*/
  import("./testimonials-carousel.js"); /*Наконечний*/
  import("./index.call-us.sale-week.countdown.js"); /*Курилін*/
  import("./common.footer.copyright.clock.js"); /*Курилін*/
  import("./dry-food.js"); /*Зоценко*/
  import("./trending-carousel.js"); /*Мачіха*/
  import("./brands.js"); /*Kундукова*/
  import("./featured-product.js"); // Никифорчин
  import("./swiper.js"); //Марченко
  import("./index.sub.featured-container.js"); // Никифорчин

  // Викликаємо завантаження категорій тут
  loadCategories();
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});

// Загружаємо категорії з JSON файлу та відображаємо їх в меню
async function loadCategories() {
  try {
    const response = await fetch("categories.json"); // шлях до вашого JSON файлу
    const categories = await response.json();
    displayCategories(categories);
  } catch (error) {
    console.error("Failed to load categories:", error);
  }
}

// Відображаємо категорії в меню
function displayCategories(categories) {
  const categoriesMenu = document.querySelector(".header__menu");
  categories.forEach((category) => {
    const menuItem = document.createElement("li");
    menuItem.classList.add("header__menu-item");
    const categoryLink = document.createElement("a");
    categoryLink.textContent = category.name;
    categoryLink.href = `#${category.shortname}`;
    categoryLink.classList.add("header__menu-item-link");
    menuItem.appendChild(categoryLink);
    categoriesMenu.appendChild(menuItem);
  });
}
