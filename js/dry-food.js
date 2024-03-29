// Зоценко Діана__block 10

const response = await fetch("api/dry-food/products.json");
const products = await response.json();

const dogsProducts = products.filter(product => product.category === "dogs");
const catsProducts = products.filter(product => product.category === "cats");
const otherProducts = products.filter(product => product.category === "other");

function renderDogsProducts(dogsProducts, rate = 1, convertTo = "USD") {
  let productsDomString = "";
  for (const product of dogsProducts) {
    productsDomString += `
        <article class="dry-food__card">
            <img class="dry-food__product-icon" src="${product.image}" alt="${product.title}">
            <div class="dry-food__description">
                <div class="dry-food__header-and-price">
                    <p class="dry-food__header">${product.title}</p>
                    <span class="dry-food__price-decorator"></span>
                    <span class="dry-food__price">${currencyMarkers[convertTo]}${(product.price * rate).toFixed()}</span>
                </div>
                <span class="dry-food__ingredients">${product.ingredients}</span>
            </div>
        </article>`;
  }
  const productsContainer = document.querySelector(".dogs-products-list");
  productsContainer.innerHTML = productsDomString;
}

function renderCatsProducts(catsProducts, rate = 1, convertTo = "USD") {
  let productsDomString = "";
  for (const product of catsProducts) {
    productsDomString += `
        <article class="dry-food__card">
            <img class="dry-food__product-icon" src="${product.image}" alt="${product.title}">
            <div class="dry-food__description">
                <div class="dry-food__header-and-price">
                    <p class="dry-food__header">${product.title}</p>
                    <span class="dry-food__price-decorator"></span>
                    <span class="dry-food__price">${currencyMarkers[convertTo]}${(product.price * rate).toFixed()}</span>
                </div>
                <span class="dry-food__ingredients">${product.ingredients}</span>
            </div>
        </article>`;
  }
  const productsContainer = document.querySelector(".cats-products-list");
  productsContainer.innerHTML = productsDomString;
}

function renderOtherProducts(otherProducts, rate = 1, convertTo = "USD") {
  let productsDomString = "";
  for (const product of otherProducts) {
    productsDomString += `
        <article class="dry-food__card">
            <img class="dry-food__product-icon" src="${product.image}" alt="${product.title}">
            <div class="dry-food__description">
                <div class="dry-food__header-and-price">
                    <p class="dry-food__header">${product.title}</p>
                    <span class="dry-food__price-decorator"></span>
                    <span class="dry-food__price">${currencyMarkers[convertTo]}${(product.price * rate).toFixed()}</span>
                </div>
                <span class="dry-food__ingredients">${product.ingredients}</span>
            </div>
        </article>`;
  }
  const productsContainer = document.querySelector(".other-products-list");
  productsContainer.innerHTML = productsDomString;
}

let currencies;
let lastRead = 0;

async function convertCurrency() {
  if (!currencies || new Date() - lastRead > 30 * 1000) {
    try {
      const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
      currencies = await response.json();
    } catch (error) {
      console.error("Error: " + error.message);
    }
    lastRead = new Date();
  }
  const convertTo = document.querySelector(".dry-food__currency").value;
  const rate = currencies.rates[convertTo];

  renderDogsProducts(dogsProducts, rate, convertTo);
  renderCatsProducts(catsProducts, rate, convertTo);
  renderOtherProducts(otherProducts, rate, convertTo);
}

document
  .querySelector(".dry-food__currency")
  .addEventListener("change", convertCurrency);

convertCurrency();

const currencyMarkers = {
  "USD" : "$",
  "EUR" : "€",
  "PLN" : "Zł",
  "UAH" : "₴"
};