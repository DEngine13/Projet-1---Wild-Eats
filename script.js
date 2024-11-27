const restaurants = [
  { name: "Choucroutage", specialty: "Choucroute" },
  { name: "Choucrouterie", specialty: "Choucroute" },
  { name: "Choucroumax", specialty: "Choucroute" },
  { name: "Chouc' Route", specialty: "Choucroute" },
  { name: "Choucrouroute", specialty: "Choucroute" },
];

/MENU BURGER/;

var menuBurger = document.getElementById("menuBurger");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openMenu;
closeBtn.onclick = closeMenu;

function openMenu() {
  menuBurger.classList.add("active");
}

function closeMenu() {
  menuBurger.classList.remove("active");
}
