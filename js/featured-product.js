

const response = await fetch('api/featured-product/featured-product.json');
 
const products = await response.json();
renderCode(products);


function renderCode(productList, rate=1){

    let productDomString=""; // змінна для переносу нашого html
 for(const product of productList){ // список в якому ми будемо передавати елемении 
        productDomString+=`
        <div class="slider__main-slider">
        
        
        <div class="slide">
          <img
            class="slide-item"
            src="${product.image}"
            alt="${product.title}"
          />
        </div>


        
          <button class="btn left">
            <img class="btn__arrow controlls" src="img/featured-product/arrivals-arrow-left.png" alt="">
          </button>
          <button class="btn right">
          <img class="btn__arrow controlls"src="img/featured-product/arrivals-arrow-right.png" alt="">
          </button>
        
       
      </div>   
    <div class="buyspace__main"> 
        <div class="buyspace__main-info">
            <p class="buyspace__stock-text">In stock</p>

            <h2 class="buyspace__maintext">${product.title}</h2>

            <p class="product__code">${product.productCode}</p>

            <p class="buyspace__price">Price: ${(product.price*rate).toFixed(2)}</p>
          </div>

          <div class="buyspace__line"></div>

          <div class="buyspace__count-element">
            <input
            class="input__main"
              type="number"
              id="quantity"
              name="quantity"
              value="1"
              min="1"
            />

            <button class="buyspace__addcard-btn">Add to cart</button>
          </div>

          <p><a class="text__under-line" href="#">DESCRIPTION</a></p>
         <div class="buyspace__line line-mod"></div>
          <p class="buyspace__text">
           ${product.description}
          </p>
     </div>     
        `;
 }
    const productContainer= document.querySelector('.slider__container');// контейнер нашого блоку в який ми будемо ставиити наш поточний результат

    productContainer.innerHTML = productDomString;
}

async function convertCurrency(){
  const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
  const currencies = await response.json();
  const converTo=document.querySelector('.product__currency').value;
  const rate = currencies.rates[converTo];
  renderCode(products,rate);
}

document.querySelector('.product__currency').addEventListener('change',convertCurrency);// викликається на зміну option
