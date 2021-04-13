const saladsTab = document.querySelector("#tab-salads");
const pizzasTab = document.querySelector("#tab-pizzas");
const noodlesTab = document.querySelector("#tab-noodles");
let currentActiveTab = saladsTab;

const saladsList = document.querySelector("#list-salads");
const pizzasList = document.querySelector("#list-pizzas");
const noodlesList = document.querySelector("#list-noodles");

function clickTab(clickedTab) {
  currentActiveTab.classList.toggle("active");
  currentActiveTab = clickedTab;
  currentActiveTab.classList.toggle("active");
  if (clickedTab == saladsTab) {
    saladsList.style.display = "flex";
    pizzasList.style.display = "none";
    noodlesList.style.display = "none";
    return;
  }
  else if (currentActiveTab == pizzasTab) {
    saladsList.style.display = "none";
    pizzasList.style.display = "flex";
    noodlesList.style.display = "none";
    return;
  }
  else if (currentActiveTab == noodlesTab) {
    saladsList.style.display = "none";
    pizzasList.style.display = "none";
    noodlesList.style.display = "flex";
    return;
  }
}

const nav = document.querySelector(".navigation");
const menuIcon = document.querySelector(".menu-close");
function animateMenuBars() {
  menuIcon.classList.toggle("change");
  nav.classList.toggle("visible");
}