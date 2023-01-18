const swiperes = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,

  breakpoints: {
    650: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    850: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
});

const swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-nexte",
    prevEl: ".swiper-button-preve",
  },
  thumbs: {
    swiper: swiperes,
  },
});
