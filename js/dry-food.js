// Зоценко Діана__block 10

const responseDogs = await fetch("api/dry-food/dogs-products.json");
const dogsProducts = await responseDogs.json();

const responseCats = await fetch("api/dry-food/cats-products.json");
const catsProducts = await responseCats.json();

const responseOther = await fetch("api/dry-food/other-products.json");
const otherProducts = await responseOther.json();

function renderDogsProducts(dogsProducts) {
  let productsDomString = "";
  for (const product of dogsProducts) {
    productsDomString += `
        <article class="dry-food__card">
            <img class="dry-food__product-icon" src="${product.image}" alt="${product.title}" width="120">
            <div class="dry-food__description">
                <div class="dry-food__header-and-price">
                    <p class="dry-food__header">${product.title}</p>
                    <span class="dry-food__price-decorator"></span>
                    <span class="dry-food__price">${product.price}</span>
                </div>
                <span class="dry-food__ingredients">${product.ingredients}</span>
            </div>
        </article>`;
  }
  const productsContainer = document.querySelector(".dogs-products-list");
  productsContainer.innerHTML = productsDomString;
}

function renderCatsProducts(catsProducts) {
  let productsDomString = "";
  for (const product of catsProducts) {
    productsDomString += `
        <article class="dry-food__card">
            <img class="dry-food__product-icon" src="${product.image}" alt="${product.title}" width="120">
            <div class="dry-food__description">
                <div class="dry-food__header-and-price">
                    <p class="dry-food__header">${product.title}</p>
                    <span class="dry-food__price-decorator"></span>
                    <span class="dry-food__price">${product.price}</span>
                </div>
                <span class="dry-food__ingredients">${product.ingredients}</span>
            </div>
        </article>`;
  }
  const productsContainer = document.querySelector(".cats-products-list");
  productsContainer.innerHTML = productsDomString;
}

function renderOtherProducts(otherProducts) {
  let productsDomString = "";
  for (const product of otherProducts) {
    productsDomString += `
        <article class="dry-food__card">
            <img class="dry-food__product-icon" src="${product.image}" alt="${product.title}" width="120">
            <div class="dry-food__description">
                <div class="dry-food__header-and-price">
                    <p class="dry-food__header">${product.title}</p>
                    <span class="dry-food__price-decorator"></span>
                    <span class="dry-food__price">${product.price}</span>
                </div>
                <span class="dry-food__ingredients">${product.ingredients}</span>
            </div>
        </article>`;
  }
  const productsContainer = document.querySelector(".other-products-list");
  productsContainer.innerHTML = productsDomString;
}

renderDogsProducts(dogsProducts);
renderCatsProducts(catsProducts);
renderOtherProducts(otherProducts);
