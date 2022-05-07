const reviewsList = document.querySelector("#reviews-list");

const displayReview = () => {
  reviewsList.innerHTML = "";

  reviews.forEach((review, index) => {
    const { name, image, location, rating, text } = review;

    const slide = document.createElement("li");
    slide.className = "splide__slide feedback__box";

    const element = `
            <div class="box__header">
                <div class="img__container">
                    <img
                    src="${image}"
                    class="header__img"
                    />
                </div>
                <h3 class="header__name">${name}</h3>
                <p class="header__location">${location}</p>
                <div class="header__rating">
                    <div class="rating__star" style="--index: 0">&#x2605;</div>
                    <div class="rating__star" style="--index: 1">&#x2605;</div>
                    <div class="rating__star" style="--index: 2">&#x2605;</div>
                    <div class="rating__star" style="--index: 3">&#x2605;</div>
                    <div class="rating__star" style="--index: 4">&#x2605;</div>
                </div>
            </div>

            <div class="box__body">
                ${text}
            </div>
            `;

    slide.innerHTML = element;
    splide3.add(slide);

    const stars = slide.querySelectorAll(".rating__star");

    stars.forEach((star) => {
      if (star.style.getPropertyValue("--index") < rating) {
        star.classList.add("rating__star--highlighted");
      }
    });
  });

  splide3.refresh();

  const sliderImgContainer = document.querySelector(".feedback--left");
  const sliderBigImage = document.querySelector(".feedbacks__img");

  splide3.on("move", () => {
    sliderImgContainer.classList.remove("feedback--animated");
  });

  splide3.on("visible", (slider) => {
    sliderBigImage.style.backgroundImage = `url(${
      slider.slide.querySelector(".header__img")?.src
    })`;
    sliderImgContainer.classList.add("feedback--animated");
  });
};

document.addEventListener("DOMContentLoaded", () => {
  displayReview();
});
