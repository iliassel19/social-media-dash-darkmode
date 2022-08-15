const darkmodeToggler = document.querySelector(".btn__darkmode-toggler");
const darkmodeTogglerCercle = document.querySelector(
  ".btn__darkmode-toggler-cercle"
);

const backgroundTop = document.querySelector(".bg-top");
const headerHeading = document.querySelector(".header__heading");
const headerFollowers = document.querySelector(".header__followers");
const socialContainers = document.querySelectorAll(".socials__container");
const socialFollowersNum = document.querySelectorAll(".socials__followers-num");
const overview = document.querySelector(".overview");
const overviewBox = document.querySelectorAll(".overview__box");
const overviewTitle = document.querySelectorAll(".overview__title");
const overviewNum = document.querySelectorAll(".overview__num");

const toggleDarkmodes = function (e) {
  const btn = e.target.closest(".btn__darkmode-toggler");
  if (!btn) return;

  darkmodeToggler.classList.toggle("dark");
  darkmodeTogglerCercle.classList.toggle("toggle");
  backgroundTop.classList.toggle("dark");
  headerHeading.classList.toggle("dark");
  headerFollowers.classList.toggle("dark");
  socialContainers.forEach((container) => container.classList.toggle("dark"));
  socialFollowersNum.forEach((followers) => followers.classList.toggle("dark"));
  document.body.classList.toggle("dark");
  overview.classList.toggle("dark");
  overviewBox.forEach((box) => box.classList.toggle("dark"));
  overviewTitle.forEach((title) => title.classList.toggle("dark"));
  overviewNum.forEach((num) => num.classList.toggle("dark"));
};

darkmodeToggler.addEventListener("click", toggleDarkmodes);
