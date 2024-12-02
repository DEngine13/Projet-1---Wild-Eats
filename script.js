const restaurants = [
  {
    name: "La Jacobine",
    location: "Paris",
    Vegan: "non",
    wildstar: "5",
    Picture: "la-jacobine-PARIS.jpg",
    Description:
      "Bienvenue à La Jacobine, un lieu où la tradition culinaire française rencontre la passion et l’authenticité.",
    GPS: [48.853473644057445, 2.3392363338910585],
    prix: 20,
  },
  {
    name: "Melt",
    location: "Paris",
    Vegan: "non",
    wildstar: "4",
    Picture: "melt-PARIS.jpg",
    Description:
      "Chez Melt nous reprenons les valeurs culinaires du Texas en fumant toutes nos viandes au feu de bois de chêne.",
    GPS: [48.865808415837115, 2.3715107031938003],
    prix: 30,
  },
  {
    name: "Aujourd'hui Demain",
    location: "Paris",
    Vegan: "oui",
    wildstar: "4",
    Picture: "aujourdhuidemain-PARIS.jpg",
    Description:
      "Le concept de ce lieu est avant tout de rassembler en un seul et même endroit les meilleurs produits vegan.",
    GPS: [48.85900070993327, 2.375116081780484],
    prix: 10,
  },
  {
    name: "Les Tontons Veg",
    location: "Paris",
    Vegan: "oui",
    wildstar: "5",
    Picture: "lestontonsveg-PARIS.jpg",
    Description: "On peut être végan sans crier que le tofu c’est le turfu.",
    GPS: [48.87477488723339, 2.355429119886937],
    prix: 15,
  },
  {
    name: "Elie Traiteur",
    location: "Paris",
    Vegan: "oui",
    wildstar: "4",
    Picture: "elietraiteur-PARIS.jpg",
    Description:
      "Elie Traiteur, un petit restaurant cosy dans une rue agréable, séduit par sa cuisine libanaise généreuse et savoureuse.",
    GPS: [48.87489257407411, 2.343186566436156],
    prix: 25,
  },
  {
    name: "Les Chauvins Père & Fils",
    location: "Strasbourg",
    Vegan: "non",
    wildstar: "5",
    Picture: "leschauvins-STRASBOURG.jpg",
    Description:
      "Niché au cœur du quartier historique de Strasbourg, près de la Cathédrale Notre Dame.",
    GPS: [48.583730386186744, 7.753328884654923],
    prix: 55,
  },
  {
    name: "Kohola Strasbourg",
    location: "Strasbourg",
    Vegan: "OUI",
    wildstar: "4",
    Picture: "kohola-STRASBOURG.jpg",
    Description:
      "Plongez dans l’univers de Koholã et venez découvrir notre cuisine d'inspiration hawaïenne avec le poke bowl.",
    GPS: [48.578576911487836, 7.753118633877819],
    prix: 10,
  },
  {
    name: "Au Brasseur",
    location: "Strasbourg",
    Vegan: "oui",
    wildstar: "4",
    Picture: "aubrasseur-STRASBOURG.jpg",
    Description:
      "Le Brasseur, situé à Strasbourg, est une brasserie où les plats délicieux sont accompagnés d'une ambiance charmante.",
    GPS: [48.58296036224063, 7.756412216165095],
    prix: 58,
  },
  {
    name: "La Fignette",
    location: "Strasbourg",
    Vegan: "oui",
    wildstar: "5",
    Picture: "LaFignette-STRASBOURG.jpg",
    Description:
      "La Fignette, c’est comme une bonne tarte flambée, du feu de bois, et une occasion à tout moment pour se faire plaisir.",
    GPS: [48.58257476098657, 7.743042180433159],
    prix: 40,
  },
  {
    name: "Coco Lobo",
    location: "Strasbourg",
    Vegan: "oui",
    wildstar: "4",
    Picture: "COCOLOBO-STRASBOURG.jpg",
    Description:
      "Un Restaurant Tapas mais aussi un Bar de Nuit original et agréable au coeur du quartier de la Petite-France à Strasbourg.",
    GPS: [48.579234228037535, 7.739355368789756],
    prix: 30,
  },
  {
    name: "Le Hippie Chic Café",
    location: "Marseille",
    Vegan: "oui",
    wildstar: "4",
    Picture: "lehippiechiccafe-MARSEILLE.jpg",
    Description:
      "Situé dans le quartier dynamique de la Joliette à Marseille, notre restaurant offre une expérience culinaire unique.",
    GPS: [43.30439711550707, 5.36575276432541],
    prix: 25,
  },
  {
    name: "Le Fantastique",
    location: "Marseille",
    Vegan: "oui",
    wildstar: "5",
    Picture: "lefantastique-MARSEILLE.jpg",
    Description:
      "Un restaurant chaleureux et accueillant. Le décor est magique, et la cuisine, faite avec amour, est exquise.",
    GPS: [43.28802042739375, 5.389619110199852],
    prix: 65,
  },
  {
    name: "Trattoria Partenope",
    location: "Marseille",
    Vegan: "oui",
    wildstar: "4",
    Picture: "trattoria-partenope-MARSEILLE.jpg",
    Description:
      "Trattoria Partenope offre une ambiance authentique et conviviale, rappelant les charmantes trattorias italiennes.",
    GPS: [43.29974261866287, 5.366436810382611],
    prix: 30,
  },
  {
    name: "Full Grill",
    location: "Marseille",
    Vegan: "oui",
    wildstar: "5",
    Picture: "COCOLOBO-STRASBOURG.jpg",
    Description:
      "Nouveau restaurant très chaleureux proposant un bel assortiment de viandes grillées, de burgers, salades et tex-mex.",
    GPS: [43.28172155502997, 5.428221252712117],
    prix: 45,
  },
  {
    name: "Le Dodo",
    location: "Marseille",
    Vegan: "oui",
    wildstar: "4",
    Picture: "ledodo-MARSEILLE.jpg",
    Description:
      "Restaurant mauricien proposant des spécialités typiques . Venez voyager aux Antilles à travers vos papilles de l'entrée au dessert!",
    GPS: [43.28902099263098, 5.386837598883278],
    prix: 20,
  },
  {
    name: "Daniel et Denise Saint-Jean",
    location: "Lyon",
    Vegan: "oui",
    wildstar: "5",
    Picture: "daniel&denise-LYON.jpg",
    Description:
      "À deux pas de la cathédrale St-Jean, ce bouchon emblématique du Vieux Lyon est tenu par le chef Joseph Viola.",
    GPS: [45.76042846935959, 4.825477771379978],
    prix: 50,
  },
  {
    name: "Les Burgers De Papa",
    location: "Lyon",
    Vegan: "oui",
    wildstar: "4",
    Picture: "lesburgersdepapa-LYON.jpg",
    Description:
      "Fondés à Lyon Presqu'île en 2013, les Burgers de Papa ont bien grandi mais restent, les meilleurs burgers du monde.",
    GPS: [45.766672529425584, 4.835641235467729],
    prix: 35,
  },
  {
    name: "Bartholomé",
    location: "Lyon",
    Vegan: "oui",
    wildstar: "5",
    Picture: "bartholome-lyon.jpg",
    Description:
      "Bartholomé, votre restaurant lyonnais spécialisé dans le brunch depuis 2017.",
    GPS: [45.76896033395655, 4.831204396990601],
    prix: 20,
  },
  {
    name: "Tome",
    location: "Lyon",
    Vegan: "oui",
    wildstar: "4",
    Picture: "tome-LYON.jpg",
    Description:
      "La cuisine fusion de ce restaurant offre des repas authentiques.",
    GPS: [45.7694251521317, 4.835473723981344],
    prix: 30,
  },
  {
    name: "Bistro Abel",
    location: "Lyon",
    Vegan: "non",
    wildstar: "5",
    Picture: "bistroabel-LYON.jpg",
    Description:
      "Le Bistrot d’Abel est le plus vieux restaurant de Lyon et garant de la tradition des Mères Lyonnaise.",
    GPS: [45.764193047388254, 4.836881252815976],
    prix: 70,
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
    prix: 45,
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
    prix: 80,
  },
];

const sectionCardsTitle = document.querySelector(".sectionCardsTitle");
const restauStar = restaurants.filter((restaurant) => restaurant.wildstar >= 4);
const btncities = document.querySelectorAll(".btncities");

let currentFilter = restaurants;

btncities.forEach((btn) => {
  btn.addEventListener("click", function () {
    // 'this' fait référence au bouton cliqué
    const locationRestau = restaurants.filter(
      (restaurant) => restaurant.location == this.innerText
    );
    sectionCardsTitle.innerHTML = `Les Restaurants à ${this.innerText}`;
    currentFilter = locationRestau;
    createCard(locationRestau); // Crée une carte pour la ville
  });
});

function updateCards() {
  let filteredrestaurants = restaurants;

  if (searchInput.value) {
    filteredrestaurants = filteredrestaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchInput.value.toLowerCase())
    );
  }
  createCard(filteredrestaurants);
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
    rank.innerHTML = `${restau.wildstar}⭐ - prix moyen : ${restau.prix}€`;

    // for (let i = 0; i < restau.wildstar; i++) {
    //   rank.innerHTML += "⭐";
    // }

    rank.style.fontSize = "1rem";
    card.appendChild(rank);

    card.addEventListener("click", () => {
      if (card.classList.contains("expanded")) {
        card.classList.remove("expanded");
        rank.innerHTML = `${restau.wildstar}⭐ - prix moyen : ${restau.prix}€`;
      } else {
        document.querySelectorAll(".card.expanded").forEach((expandedCard) => {
          expandedCard.classList.remove("expanded");
        });
        card.classList.add("expanded");

        rank.innerHTML = "";

        cardDes.innerHTML = `
          ${restau.Description}<br>
          <strong>Ville:</strong> ${restau.location}<br>
          <strong>Vegan:</strong> ${restau.Vegan ? "Yes" : "No"}<br>${
          restau.wildstar
        }⭐ - prix moyen : ${restau.prix}€<br><a>Commander ici</a>`;

        const [lat, lon] = restau.GPS;
        map.setView([lat, lon, 13]);
        marker.setLatLng([lat, lon]);
        marker.bindPopup(
          `<strong>${restau.name}</strong><br>${restau.location}`
        );
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

let isPriceAscending = true;

document.getElementById("sort-price-button").addEventListener("click", () => {
  // Copiez le tableau de restaurants
  const sortedRestaurants = [...currentFilter].sort((a, b) =>
    isPriceAscending ? a.prix - b.prix : b.prix - a.prix
  );

  // Alternez entre croissant et décroissant
  isPriceAscending = !isPriceAscending;

  // Réaffichez les cartes triées
  createCard(sortedRestaurants);

  // Changez le texte du bouton pour indiquer l'état du tri
  document.getElementById("sort-price-button").innerText = isPriceAscending
    ? "Trier par prix (croissant)"
    : "Trier par prix (décroissant)";
});
