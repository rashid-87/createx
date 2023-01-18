window.addEventListener("load", () => {
  const nav = document.querySelector(".header__nav");
  const icon = document.querySelector(".header__icon");

  if (nav && icon) {
    icon.addEventListener("click", () => {
      nav.classList.toggle("header__active");
      icon.classList.toggle("header__active");
    });
  }
});
