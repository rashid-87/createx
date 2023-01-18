window.addEventListener("load", () => {

  const btn = document.querySelectorAll(".supcess__btn");
  const modal = document.querySelector(".modal");
  const btnClose = document.querySelector(".modal__close");

  btn.forEach(function (item) {
    item.addEventListener("click", function () {
      modal.classList.add("modal__active");
    })
  });

  btnClose.addEventListener("click", function () {
    modal.classList.remove("modal__active");
  });

});
