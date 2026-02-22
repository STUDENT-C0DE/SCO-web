const swiper = new Swiper('.slider_wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
        slidesPerView: 1
    },
  }
});
