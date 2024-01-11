var burgerIcon = document.getElementById("burger");
var navLinks = document.getElementById("navLinks");
burgerIcon.addEventListener("click", function () {
  navLinks.classList.toggle("active");
  burgerIcon.classList.toggle("active-navbar");
});
