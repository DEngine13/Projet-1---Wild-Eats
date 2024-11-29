const restaurants = [
  {
    name: "Choucrouterie",
    location: "Paris",
    Vegan: true,
    wildstar: "5",
    Picture: "Strasbourgchurch-625211_1280.jpg",
    Description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam",
    GPS: "",
  },
  {
    name: "Le Loreum",
    location: "Lyon",
    Vegan: "oui",
    wildstar: "4",
    Picture: "paris-4563750_1280.jpg",
    Description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam",
  },
  {
    name: "Pixelite",
    location: "Marseille",
    Vegan: "non",
    wildstar: "4",
    Picture: "marseille-7352728_1280.jpg",
    Description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam",
    GPS: [43.270409, 5.392682],
  },
  {
    name: "Grid a Volonté",
    location: "Strasbourg",
    Vegan: "non",
    wildstar: "5",
    Picture: "Lyon-basilica-2382830_1280.jpg",
    Description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam",
    GPS: [48.582474, 7.752762],
  },
  {
    name: "La Brigade Du Tigre",
    location: "Paris",
    Vegan: "non",
    wildstar: "5",
    Picture:
      "https://lh3.googleusercontent.com/p/AF1QipMrXOuD_lAm75PP6k656m0RM1Sg9B2GZUkgGegf=s680-w680-h510",
    Description:
      "Une précision des goûts récompensé par Michelin comme jeune talent très prometteur",
    GPS: [48.873544332552235, 2.3479134829341763],
  },
  {
    name: "L'Ardoise",
    location: "Paris",
    Vegan: "non",
    wildstar: "5",
    Picture:
      "https://lardoise-arpajon.fr/wp-content/uploads/2024/06/foie-gras-du-chef-gelee-de-champagne-framboise-brioche.png",
    Description:
      "Vous aurez toujours des produits frais et savoureux dans votre assiette. Ceci est notre promesse.",
    GPS: [48.592111887538316, 2.247526124251261],
  },
];

const sectionCardsTitle = document.querySelector('.sectionCardsTitle');
const restauStar = restaurants.filter((restaurant) => restaurant.wildstar >= 4);
const btncities = document.querySelectorAll('.btncities')

btncities.forEach((btn) => {
  btn.addEventListener('click', function () {
    // 'this' fait référence au bouton cliqué
    const locationRestau = restaurants.filter((restaurant) => restaurant.location == this.innerText);
    sectionCardsTitle.innerHTML =`Les Restaurants a ${this.innerText}`
    createCard(locationRestau);   // Crée une carte pour la ville
  });
});

function updateCards() {

  let filteredrestaurants = restaurants;

  if (searchInput.value) {
    filteredrestaurants = filteredrestaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchInput.value.toLowerCase())
    );
  }
createCard(filteredrestaurants)
}

const searchInput = document.querySelector(".search-input");
searchInput.addEventListener("input", () => updateCards());


function createCard(restaus) {
  const cards = document.querySelector(".container-stars");
  const sectionStar = document.querySelector(".stars");
  // On efface à chaque execution de la fonction les précédentes cards.
  cards.innerHTML = "";

  // On utilise la méthode forEach qui permet de boucler sur un tableau autant de fois qu'il y a d'éléments
  // dans le tableau

  restaus.forEach((restau) => {
    // Création de la div card
    const card = document.createElement("div");
    card.classList.add("card");
    cards.appendChild(card);

    // Création de la div card-img
    const cardImg = document.createElement("img");
    cardImg.classList.add("card-image-container");
    card.appendChild(cardImg);
    cardImg.src = restau.Picture;

    // Création du h2 card-title
    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = restau.name;
    card.appendChild(cardTitle);

    const cardDes = document.createElement("p");
    cardDes.classList.add("card-des");
    cardDes.innerHTML = restau.Description;
    card.appendChild(cardDes);

    const rank = document.createElement("p");
    rank.innerHTML = `${restau.wildstar}⭐`;
    rank.style.fontSize = "1.5rem";
    card.appendChild(rank);

    card.addEventListener("click", () => {
      if (card.classList.contains("expanded")) {
        card.classList.remove("expanded");
        rank.innerHTML = `${restau.wildstar}⭐`;
      } else {
        document.querySelectorAll(".card.expanded").forEach((expandedCard) => {
          expandedCard.classList.remove("expanded");
        });
        card.classList.add("expanded");
        rank.innerHTML = "";
        cardDes.innerHTML = `
          ${restau.Description}<br>
          <strong>Location:</strong> ${restau.location}<br>
          <strong>Vegan:</strong> ${restau.Vegan ? "Yes" : "No"}<br> ${
          restau.wildstar
        }⭐
        `;

        const [lat, lon] = restau.GPS;
        map.setView([lat, lon, 13]);
        marker.setLatLng([lat, lon]);
        marker.bindPopup(`<strong>${restau.name}</strong><br>${restau.location}`);
      }
    });
    cards.appendChild(card);
  });
}
createCard(restauStar);

let map = L.map("map").setView([48.873128, 2.347907], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

let marker = L.marker([48.873128, 2.347907]).addTo(map);
marker.bindPopup("<b>Le Loreum</b><br>Paris").openPopup();

// MENU BURGER

const hamMenu = document.querySelector(".burger-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
