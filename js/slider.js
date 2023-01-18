const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
      navigation: {
      nextEl: '.slider__prev',
      prevEl: '.slider__next',
    },
    breakpoints: {
      650: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      950: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
    }
  });
