const header = document.querySelector("#header");
const menu = document.querySelector("#menu");
const menuOpenBtn = document.querySelector("#menu-open");
const menuCloseBtn = document.querySelector("#menu-close");

menuOpenBtn.addEventListener("click", () => {
  menu.classList.add("header__menu--open");
});

menuCloseBtn.addEventListener("click", () => {
  menu.classList.remove("header__menu--open");
});

document.addEventListener("click", (e) => {
  const withinBoundaries =
    e.composedPath().includes(menu) || e.composedPath().includes(menuOpenBtn);

  if (!withinBoundaries) {
    menu.classList.remove("header__menu--open");
  }
});

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop) {
    header.classList.add("header__wrapper--scrolled");
  } else {
    header.classList.remove("header__wrapper--scrolled");
  }
});
