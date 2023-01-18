window.addEventListener("load", function () {

    const btn = document.querySelector(".supcess__next");
    const modal = document.querySelector(".modalka");
    const btnClose = document.querySelector(".modalka__close");
  
    btn.addEventListener("click", function () {
      modal.classList.add("modalka__active");
    });
    
  
    btnClose.addEventListener("click", function () {
      modal.classList.remove("modalka__active");
    });
  
  });