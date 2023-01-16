// Get the hamburger menu element
var menu = document.querySelector(".hamburger-menu");

//navbar animation
function changeIcon(icon) {
  icon.classList.toggle("change");
  menu.classList.toggle("show");
}
