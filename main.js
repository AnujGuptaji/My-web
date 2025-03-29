const toggleBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav");

toggleBtn.addEventListener("click", click);
function click() {
  navMenu.classList.toggle("active");
}