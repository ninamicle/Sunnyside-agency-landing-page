let btnMenu = document.querySelector("#btnMenu");
let hidden = document.querySelector(".hidden");

function displayMenu() {
  let menuItems = document.querySelector("#mobile");

  menuItems.classList.toggle("hidden");
}
btnMenu.addEventListener("click", displayMenu);
