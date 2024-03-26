// Зоценко Діана__block 10

const dogsProducts = [
    {
        "id" : "1",
        "image" : "img/dry-food-images/natural-beef.png",
        "title" : "Natural Beef",
        "price" : "$2",
        "ingredients" : "Meat And Bone Meal, Corn Gluten Meal, Animal Fat, Soybean Meal, Natural Flavor."
    },
    {
        "id" : "2",
        "image" : "img/dry-food-images/natural-chicken.png",
        "title" : "Natural Chicken",
        "price" : "$3",
        "ingredients" : "Deboned Chicken, Chicken Meal, Brown Rice, Corn, Corn Gluten, Meal, Natural Flavor."
    },
    {
        "id" : "3",
        "image" : "img/dry-food-images/natural-pork.png",
        "title" : "Natural Pork",
        "price" : "$2",
        "ingredients" : "Deboned Lamb, Chicken Meal, Split Peas, Lentils, Chicken Fat, Pork Meal, Dried Chicken, Pea."
    },
];

const catsProducts = [
    {
        "id" : "4",
        "image" : "img/dry-food-images/turkey-pate.png",
        "title" : "Turkey Pate",
        "price" : "$1",
        "ingredients" : "Deboned Turkey, Turkey Broth, Turkey Liver, Dried Egg Product, Cranberries, Calcium Carbonate."
    },
    {
        "id" : "5",
        "image" : "img/dry-food-images/tuna-salmon.png",
        "title" : "Tuna & Salmon",
        "price" : "$2",
        "ingredients" : "Chicken, Poultry Broth, Liver, Meat By-Products, Salmon, Tuna, Guar Gum, Minerals."
    },
    {
        "id" : "6",
        "image" : "img/dry-food-images/chicken-slice.png",
        "title" : "Chicken Slice",
        "price" : "$1",
        "ingredients" : "Wheat Gluten, Liver, Chicken, Meat By-Products, Tomatoes, Carrots, Shrimp, Soy Flour, Salt."
    },
];

const otherProducts = [
    {
        "id" : "7",
        "image" : "img/dry-food-images/grain-nuts.png",
        "title" : "Grain & Nuts",
        "price" : "$3",
        "ingredients" : "Whole Brown Rice, Oat Groats, Wheat Bran, Wheat, Soybean Meal, Soybean Hulls."
    },
    {
        "id" : "8",
        "image" : "img/dry-food-images/fish-food.png",
        "title" : "Fish Food",
        "price" : "$5",
        "ingredients" : "Dried Yeast, Ground Brown Rice, Shrimp Meal, Dried Fish Protein Digest, Wheat Gluten."
    },
    {
        "id" : "9",
        "image" : "img/dry-food-images/parrots-food.png",
        "title" : "Parrots Food",
        "price" : "$7",
        "ingredients" : "Canary Grass Seed, White Millet, Oat Groats, Ground Corn, Red Millet, Flax Seed."
    },
];

function renderDogsProducts(dogsProducts) {
    let productsDomString = '';
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
    const productsContainer = document.querySelector('.dogs-products-list');
    productsContainer.innerHTML = productsDomString;
}

function renderCatsProducts(catsProducts) {
    let productsDomString = '';
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
    const productsContainer = document.querySelector('.cats-products-list');
    productsContainer.innerHTML = productsDomString;
}

function renderOtherProducts(otherProducts) {
    let productsDomString = '';
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
    const productsContainer = document.querySelector('.other-products-list');
    productsContainer.innerHTML = productsDomString;
}

renderDogsProducts(dogsProducts);
renderCatsProducts(catsProducts);
renderOtherProducts(otherProducts);