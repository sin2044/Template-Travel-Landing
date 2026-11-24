const openMobileNav = document.querySelector("#openMobileNav");
const closeMobileNav = document.querySelector("#closeMobileNav");
const mobileNav = document.querySelector("#mobile-nav");

openMobileNav.addEventListener("click", function () {
  mobileNav.classList.add("mobile-nav--open");
  document.body.classList.add("no-scroll");
});

closeMobileNav.addEventListener("click", function () {
  mobileNav.classList.remove("mobile-nav--open");
  document.body.classList.remove("no-scroll");
});

const mobileNavLinks = mobileNav.querySelectorAll("a, button");
mobileNavLinks.forEach(function (item) {
  item.addEventListener("click", function () {
    mobileNav.classList.remove("mobile-nav--open");
    document.body.classList.remove("no-scroll");
  });
});
