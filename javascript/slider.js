let splide;

document.addEventListener("DOMContentLoaded", function () {
  splide = new Splide(".splide", {
    perPage: 5,
    perMove: 1,
    start: 0,
    rewind: true,
    rewindByDrag: true,
    gap: "1rem",
    snap: true,
    wheel: true,
    waitForTransition: true,
    classes: {
      pagination: "splide__pagination pagination__bar",
      page: "splide__pagination__page pagination__page",
      arrows: "splide__arrows slider__arrows",
      arrow: "splide__arrow slider__arrow",
      prev: "splide__arrow--prev slider__arrow--prev",
      next: "splide__arrow--next slider__arrow--next",
    },

    breakpoints: {
      576: {
        perPage: 1,
        arrows: false,
      },
      768: {
        perPage: 2,
      },
      992: {
        perPage: 3,
      },
      1200: {
        perPage: 4,
      },
    },
  });

  splide.mount();
});

const slider = document.querySelector("#slider");
const sliderContent = document.querySelector("#slider-content");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    slider.style.height = `${sliderContent.offsetHeight}px`;
  }, 10);
});
