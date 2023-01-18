const swipere = new Swiper('.swipere', {
    slidesPerView: 1,
    loop: true,
      navigation: {
      nextEl: '.inner__btn-prev',
      prevEl: '.inner__btn-next',
    }
  });