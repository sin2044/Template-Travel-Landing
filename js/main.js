new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: "auto",
  spaceBetween: 73,
  slidesPerGroup: 3, // за один шаг уезжают 3 карточки
  centeredSlides: true, // активный слайд — по центру, хвосты торчат с двух сторон
  loop: true,
  initialSlide: 4, // стартовый слайд

    breakpoints: {
    0: {
      spaceBetween: 20,
    },
    768: {
      spaceBetween: 30,
    },
    1200: {
      spaceBetween: 73,
    },
  },
});