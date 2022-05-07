let splide1;
let splide2;
let splide3;

document.addEventListener("DOMContentLoaded", function () {
  splide1 = new Splide("#splide1", {
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

  splide1.mount();

  splide2 = new Splide("#splide2", {
    perPage: 1,
    perMove: 1,
    autoplay: true,
    interval: 7000,
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
  });

  splide2.mount();

  splide3 = new Splide("#splide3", {
    perPage: 1,
    perMove: 1,
    autoplay: true,
    interval: 5000,
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
  });

  splide3.mount();
});

const slider1 = document.querySelector("#slider1");
const sliderContent1 = document.querySelector("#splide1");

const slider3 = document.querySelector("#slider3");
const sliderContent3 = document.querySelector("#splide3");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    slider1.style.height = `${sliderContent1.offsetHeight}px`;
    slider3.style.height = `${sliderContent3.offsetHeight}px`;
  }, 10);
});

window.addEventListener("resize", () => {
  slider1.style.height = `${sliderContent1.offsetHeight}px`;
  slider3.style.height = `${sliderContent3.offsetHeight}px`;
});
