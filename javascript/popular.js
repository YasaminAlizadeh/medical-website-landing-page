const listLabels = document.querySelectorAll(".tab__label");
const itemsList = document.querySelector("#search-list");

listLabels.forEach((label) => {
  label.addEventListener("click", () => {
    listLabels.forEach((label) => label.classList.remove("tab__label--active"));

    label.classList.add("tab__label--active");
    changePopularItems(label.innerText.toLowerCase());
  });
});

const changePopularItems = (label) => {
  let data;
  itemsList.innerHTML = "";

  switch (label) {
    case "specialities":
      data = popularSearches.specialities;
      break;

    case "conditions":
      data = popularSearches.conditions;
      break;

    case "procedures":
      data = popularSearches.procedures;
      break;

    default:
      break;
  }

  data.forEach((item) => {
    const { icon, title } = item;

    const slide = document.createElement("li");
    slide.className = "splide__slide tab__item";

    const element = `
        <a class="splide__slide__container">
            <div class="item__icon">
                <img
                    src="${icon}"
                />
            </div>
                ${title}
            </a>
        `;

    slide.innerHTML = element;

    splide1.add(slide);
  });

  splide1.refresh();
};

document.addEventListener("DOMContentLoaded", () => {
  changePopularItems("specialities");
});
