new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  speed: 500,
  spaceBetween: 15,

  pagination: {
    el: ".swiper-pagination",
  },

  pagination: {
    el: ".swiper-pagination",
  },

  autoplay: {
    delay: 20000,
    stopOnLastSlide: true,
    disableOnInteraction: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  simulateTouch: true,
  grabCursor: true,

  breakpoints: {
    420: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2.5,
    },
  },
});
