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
        <article>
            <img class="dry-food__product-icon" src="${product.image}" alt="${product.title}" width="120">
            <div class="description">
                <div class="header-and-price">
                    <p>${product.title}</p>
                    <span class="price-decorator"></span>
                    <span class="price">${product.price}</span>
                </div>
                <span class="ingredients">${product.ingredients}</span>
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
        <article>
            <img class="dry-food__product-icon" src="${product.image}" alt="${product.title}" width="120">
            <div class="description">
                <div class="header-and-price">
                    <p>${product.title}</p>
                    <span class="price-decorator"></span>
                    <span class="price">${product.price}</span>
                </div>
                <span class="ingredients">${product.ingredients}</span>
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
        <article>
            <img class="dry-food__product-icon" src="${product.image}" alt="${product.title}" width="120">
            <div class="description">
                <div class="header-and-price">
                    <p>${product.title}</p>
                    <span class="price-decorator"></span>
                    <span class="price">${product.price}</span>
                </div>
                <span class="ingredients">${product.ingredients}</span>
            </div>
        </article>`;
  }
  const productsContainer = document.querySelector(".other-products-list");
  productsContainer.innerHTML = productsDomString;
}

renderDogsProducts(dogsProducts);
renderCatsProducts(catsProducts);
renderOtherProducts(otherProducts);
