new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  loop: true,
  speed: 500,
  spaceBetween: 10,

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

  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".guest_reviews",
  },

  simulateTouch: true,
  grabCursor: true,

  watchOverflow: true,

  breakpoints: {
    420: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2,
    },
    1124: {
      slidesPerView: 2.5,
    },
  },
});
