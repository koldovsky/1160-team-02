htmx.onLoad(function () {
  const burgerBtn = document.querySelector(".header__burger-btn");
  const navElement = document.querySelector(".header__nav");

  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("burger-active");
    navElement.classList.toggle("active-menu");
    document.body.classList.toggle("lock");
  });
});
