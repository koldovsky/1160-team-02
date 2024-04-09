const dogs = [
  {
    id: "1",
    name: "DOGGY Fun Set",
    image: "img/recommendation/doggy-fun-set.png",
    price: "$6",
  },
  {
    id: "2",
    name: "DUNA Pillow Bed",
    image: "img/recommendation/duna-pillow-bed.png",
    price: "$10",
  },
  {
    id: "3",
    name: "AGA Retractable Leash",
    image: "img/recommendation/aga-retractable-lesh.png",
    price: "$33",
  },
  {
    id: "4",
    name: "DOGGY 2-Bunch Toy",
    image: "img/recommendation/doggy-bunch-toy.png",
    price: "$5",
  },
];

const cats = [
  {
    id: "1",
    name: "AGA Mice Set",
    image: "img/recommendation/aga-mice-set.png",
    price: "$3",
  },
  {
    id: "2",
    name: "VITALIFE 2-Bowls Set",
    image: "img/recommendation/vitalife-bowls-set.png",
    price: "$9",
  },
  {
    id: "3",
    name: "AGA Leash & Collar",
    image: "img/recommendation/aga-leash-collar.png",
    price: "$13",
  },
  {
    id: "4",
    name: "DUNA Gray Bed",
    image: "img/recommendation/duna-pillow-bed.png",
    price: "$25",
  },
];

const parrots = [
  {
    id: "1",
    name: "DORA Hanging Mirror",
    image: "img/recommendation/dora-hanging-mirror.png",
    price: "$14",
  },
  {
    id: "2",
    name: "VETRA Hanging Nest",
    image: "img/recommendation/vetra-hanging-nest.png",
    price: "$8",
  },
  {
    id: "3",
    name: "DORA Wood Swing",
    image: "img/recommendation/dora-wood-swing.png",
    price: "$7",
  },
  {
    id: "4",
    name: "OPTY Wooden Stand",
    image: "img/recommendation/opty-wooden-stand.png",
    price: "$13",
  },
];

const rabbits = [
  {
    id: "1",
    name: "SERA Purple Collar",
    image: "img/recommendation/sera-purple-collar.png",
    price: "$2",
  },
  {
    id: "2",
    name: "AGA Clinking Toy",
    image: "img/recommendation/aga-clinking-toy.png",
    price: "$2",
  },
  {
    id: "3",
    name: "HARNO Rabbit Cage",
    image: "img/recommendation/harno-rabbit-cage.png",
    price: "$60",
  },
  {
    id: "4",
    name: "DORA Rabbit Brush",
    image: "img/recommendation/dora-rabbit-brush.png",
    price: "$10",
  },
];

const hamsters = [
  {
    id: "1",
    name: "AGA Bowl for Hamsters",
    image: "img/recommendation/aga-bowl-for-hamsters.png",
    price: "$2",
  },
  {
    id: "2",
    name: "TISCO Toy Wheel",
    image: "img/recommendation/tisco-toy-wheel.png",
    price: "$9",
  },
  {
    id: "3",
    name: "STERCO Rainbow Balls",
    image: "img/recommendation/sterco-rainbow-balls.png",
    price: "$3.5",
  },
  {
    id: "4",
    name: "AGA Green Cage",
    image: "img/recommendation/aga-gree-cage.png",
    price: "$25",
  },
];

const fish = [
  {
    id: "1",
    name: "DUCCA Air Pump",
    image: "img/recommendation/ducca-air-pump.png",
    price: "$42",
  },
  {
    id: "2",
    name: "TISCO 50 Liter Aquarium",
    image: "img/recommendation/tisco-liter-aquarium.png",
    price: "$70",
  },
  {
    id: "3",
    name: "VEGA Fish Castle",
    image: "img/recommendation/vega-fish-castle.png",
    price: "$6",
  },
  {
    id: "4",
    name: "TISCO Landing Net",
    image: "img/recommendation/tisco-landing-net.png",
    price: "$4",
  },
];

const menuPages = [dogs, cats, parrots, rabbits, hamsters, fish];

function renderMenuPosition(positions) {
  let menuPositionsDomString = "";
  for (const position of positions) {
    menuPositionsDomString += `
      <div class="recommendations__menu-position">
          <div class="recommendations__menu-position-img">
              <img src="${position.image}" alt="${position.name}">
          </div>
          <a class="recommendations__href" href="#">${position.name}</a>
          <p class="recommendations__price">${position.price}</p>
          <a class="recommendations__button" href="#">Add to Cart</a>
      </div>
      `;
  }
  const menuPageContainer = document.querySelector(
    ".recommendations__category-pages"
  );
  menuPageContainer.innerHTML = menuPositionsDomString;
}

renderMenuPosition(menuPages[0]);

let menuNavSectionsButton = document.querySelectorAll(
  ".recommendations__category"
);

menuNavSectionsButton.forEach((button) => {
  button.addEventListener("click", (_) => {
    menuNavSectionsButton.forEach((button) => {
      button.classList.remove("recommendations__button-active");
    });
    button.classList.toggle("recommendations__button-active");
    renderMenuPosition(menuPages[`${button.dataset.id}`]);
  });
});
