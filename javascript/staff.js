const staffList = document.querySelector("#staff-list");

let perPage = 0;
let page = 0;

const staffData = shuffleArray([...staff, ...staff, ...staff]); // just shuffling the data and making it bigger so it looks better later

const displayStaffCards = (perPage) => {
  staffList.innerHTML = "";
  let slide;

  staffData.forEach((person, index) => {
    const { name, image, speciality } = person;

    if (index === page * perPage) {
      slide = document.createElement("li");
      slide.className = "splide__slide staff__slide";
    }

    if (index >= page * perPage && index < page * perPage + perPage) {
      const item = document.createElement("div");
      item.className = "staff__item";

      const element = `
            <div class="item__wrapper">
                <img
                    src="${image}"
                    class="item__img"
                />
                <h3 class="item__title">${name}</h3>
                <p class="description item__description">
                    ${speciality}
                </p>
            </div>
            `;

      item.innerHTML = element;
      slide.appendChild(item);

      if (index === page * perPage + perPage - 1) {
        page++;
      }
    }

    splide2.add(slide);
  });

  splide2.refresh();
};

const calculatePerPage = (innerWidth) => {
  if (innerWidth > 1200) {
    return 8;
  } else if (innerWidth > 992) {
    return 4;
  } else if (innerWidth > 576) {
    return 2;
  } else if (innerWidth <= 576) {
    return 1;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  perPage = calculatePerPage(window.innerWidth);

  displayStaffCards(perPage);
});

window.addEventListener("resize", () => {
  if (perPage !== calculatePerPage(window.innerWidth)) {
    page = 0;
    perPage = calculatePerPage(window.innerWidth);
    displayStaffCards(perPage);
  }
});
