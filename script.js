const restaurants = [
  {
    name: "La Jacobine",
    location: "Paris",
    Vegan: "non",
    wildstar: 5,
    Picture: "la-jacobine-PARIS.jpg",
    Description:
      "Bienvenue à La Jacobine, un lieu où la tradition culinaire française rencontre la passion et l’authenticité.",
    GPS: [48.853473644057445, 2.3392363338910585],
  },
  {
    name: "Melt",
    location: "Paris",
    Vegan: "non",
    wildstar: "4",
    Picture: "melt-PARIS.jpg",
    Description:
      "Chez Melt nous reprenons les valeurs culinaires du Texas en fumant toutes nos viandes au feu de bois de chêne.",
    GSP: [48.865808415837115, 2.3715107031938003],
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
  },
  {
    name: "Les Tontons Veg",
    location: "Paris",
    Vegan: "oui",
    wildstar: "5",
    Picture: "lestontonsveg-PARIS.jpg",
    Description: "On peut être végan sans crier que le tofu c’est le turfu.",
    GPS: [48.87477488723339, 2.355429119886937],
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
  },
  {
    name: "Kohola Strasbourg",
    location: "Strasbourg",
    Vegan: "OUI",
    wildstar: "4",
    Picture: "kohola-STRASBOURG.jpg",
    Description:
      "Plongez dans l’univers de Koholã avec nos 4 restaurants et venez découvrir notre cuisine d'inspiration hawaïenne avec le poke bowl.",
    GPS: [48.578576911487836, 7.753118633877819],
  },
  {
    name: "Au Brasseur",
    location: "Strasbourg",
    Vegan: "oui",
    wildstar: "4",
    Picture: "aubrasseur-STRASBOURG.jpg",
    Description:
      "Le Brasseur, situé à Strasbourg, est une brasserie où les plats délicieux sont accompagnés d'une ambiance charmante. La carte variée propose des salades, des spécialités alsaciennes, des plats de brasserie, des viandes, des welsh, des flammekueche salées et sucrées, des desserts, des glaces et des assiettes de fromages. Des incontournables comme la flammekueche pomme flambée fleur de bière et la glace délice du Brasseur sauront vous séduire. N'hésitez pas à venir découvrir ce lieu où la gastronomie rencontre la convivialité.",
    GPS: [48.58296036224063, 7.756412216165095],
  },
  {
    name: "La Fignette",
    location: "Strasbourg",
    Vegan: "oui",
    wildstar: "5",
    Picture: "LaFignette-STRASBOURG.jpg",
    Description:
      "La Fignette, c’est comme une bonne tarte flambée, du feu de bois, des ingrédients locaux et frais, un groupe d’amis autours de la table, des recettes variées et colorées et une occasion à tout moment pour se faire plaisir. La Fignette, c’est un bistrot de quartier, ouvert toute la journée et sur le monde où le voyageur sera toujours accueilli avec la joie du partage et l’habitué comme un ami. La Fignette, c’est un bout d’Alsace forte de sa diversité, de ses valeurs et de sa facilité à parler plusieurs langues. Elle défend ses saveurs et n’a pas peur de les mélanger aux plaisirs d’ailleurs. ",
    GPS: [48.58257476098657, 7.743042180433159],
  },
  {
    name: "Coco Lobo",
    location: "Strasbourg",
    Vegan: "oui",
    wildstar: "4",
    Picture: "COCOLOBO-STRASBOURG.jpg",
    Description:
      "Un Restaurant Tapas mais aussi un Bar de Nuit original et agréable au coeur du quartier de la Petite-France à Strasbourg. Faire la fête sur des rythmes latinos est le maître mot ici, tout en goûtant aux cocktails et aux spécialités culinaires espagnoles !",
    GPS: [48.579234228037535, 7.739355368789756],
  },
  {
    name: "Le Hippie Chic Café",
    location: "Marseille",
    Vegan: "oui",
    wildstar: "4",
    Picture: "lehippiechiccafe-MARSEILLE.jpg",
    Description:
      "Situé dans le quartier dynamique de la Joliette à Marseille, à deux pas du Panier, notre restaurant offre une expérience culinaire unique. En combinant des ingrédients locaux et notre savoir-faire, nous proposons à nos clients des plats originaux faits maison.",
    GPS: [43.30439711550707, 5.36575276432541],
  },
  {
    name: "Le Fantastique",
    location: "Marseille",
    Vegan: "oui",
    wildstar: "5",
    Picture: "lefantastique-MARSEILLE.jpg",
    Description:
      "Un restaurant chaleureux et accueillant. Le décor est magique, et la cuisine, faite avec amour, est exquise. Une belle terrasse arrière, un cadre charmant avec une ambiance chaleureuse et des tapas de qualité. Les mets faits maison sont frais, savoureux et goûteux, même s'il y a parfois de l'attente. Un endroit à ne pas manquer pour passer une excellente soirée à Marseille, avec un très bon rapport qualité-prix. Un vrai bijou à découvrir en dehors du tumulte du port.",
    GPS: [43.28802042739375, 5.389619110199852],
  },
  {
    name: "Trattoria Partenope",
    location: "Marseille",
    Vegan: "oui",
    wildstar: "4",
    Picture: "trattoria-partenope-MARSEILLE.jpg",
    Description:
      "Trattoria Partenope offre une ambiance authentique et conviviale, rappelant les charmantes trattorias italiennes. Les pizzas napolitaines, cuites au four à bois, sont particulièrement appréciées, avec des ingrédients frais et une pâte légère. Les arancini et spaghettis aux supions sont également plébiscités. Le service est chaleureux et attentif, renforçant l'impression d'un vrai voyage culinaire en Italie. Prix très raisonnables.",
    GPS: [43.29974261866287, 5.366436810382611],
  },
  {
    name: "Full Grill",
    location: "Marseille",
    Vegan: "oui",
    wildstar: "5",
    Picture: "COCOLOBO-STRASBOURG.jpg",
    Description:
      "Nouveau restaurant très chaleureux proposant un bel assortiment de viandes grillées, de burgers, salades et tex-mex. Prix très abordable avec une qualité et une belle ambiance au rendez-vous!",
    GPS: [43.28172155502997, 5.428221252712117],
  },
  {
    name: "Le Dodo",
    location: "Marseille",
    Vegan: "oui",
    wildstar: "4",
    Picture: "ledodo-MARSEILLE.jpg",
    Description:
      "Restaurant mauricien proposant des spécialités typiques (rougail, gâteau de manioc...). Venez voyager aux Antilles à travers vos papilles de l'entrée au dessert!",
    GPS: [43.28902099263098, 5.386837598883278],
  },
  {
    name: "Daniel et Denise Saint-Jean",
    location: "Lyon",
    Vegan: "oui",
    wildstar: "5",
    Picture: "daniel&denise-LYON.jpg",
    Description:
      "À deux pas de la cathédrale St-Jean, ce bouchon emblématique du Vieux Lyon est tenu par le chef Joseph Viola (Meilleur Ouvrier de France en 2004), déjà connu pour son Daniel et Denise du 3e arrondissement. Au menu de cet opus, une cuisine lyonnaise traditionnelle, qui ravira les amateurs.",
    GPS: [45.76042846935959, 4.825477771379978],
  },
  {
    name: "Les Burgers De Papa",
    location: "Lyon",
    Vegan: "oui",
    wildstar: "4",
    Picture: "lesburgersdepapa-LYON.jpg",
    Description:
      "Fondés à Lyon Presqu'île en 2013, les Burgers de Papa ont bien grandi mais restent, dans notre cœur et selon nos goûts, les meilleurs burgers du monde. Papa, il n'a pas changé de ses convictions de nous proposer des burgers gourmands et généreux à base de bons produits locaux. Buns du boulanger, viande 100% française avec des steaks hachés sur place chaque matin, frites maison...",
    GPS: [45.766672529425584, 4.835641235467729],
  },
  {
    name: "Bartholomé",
    location: "Lyon",
    Vegan: "oui",
    wildstar: "5",
    Picture: "bartholome-lyon.jpg",
    Description:
      "Bartholomé, votre restaurant lyonnais spécialisé dans le brunch depuis 2017, vous propose des plats inspirés de l'univers du breakfast Nord Américain, mais aussi des desserts hyper gourmands et maxi sandwichs. Chaque nouvelle carte est élaborée avec soin à partir de produits frais, et toujours avec la volonté de proposer des alternatives sans gluten, avec ou sans lactose ou encore véganes.",
    GPS: [45.76896033395655, 4.831204396990601],
  },
  {
    name: "Tome",
    location: "Lyon",
    Vegan: "oui",
    wildstar: "4",
    Picture: "tome-LYON.jpg",
    Description:
      "La cuisine fusion de ce restaurant offre des repas authentiques. Allez goûter un filet américain délectable dans Tomé si vous n'êtes pas loin. Commandez un parfait savoureux. A ce lieu, les visiteurs peuvent boire un latté délicieux.",
    GPS: [45.7694251521317, 4.835473723981344],
  },
  {
    name: "Bistro Abel",
    location: "Lyon",
    Vegan: "non",
    wildstar: "5",
    Picture: "bistroabel-LYON.jpg",
    Description:
      "Le Bistrot d’Abel est le petit frère du Café Comptoir ABEL, à la voute d’Ainay, plus vieux restaurant de Lyon et garant de la tradition des Mères Lyonnaise. Ici, tout est à l’unisson, comme installé depuis des siècles. Une gastronomie bonhomme, mais goûteuse et généreuse, redonne aux palais l’appétence d’une nourriture d’antan. La capitale de la gastronomie trouve ici une nouvelle ambassade du bien manger et du bien recevoir, un nouveau lieu de mœurs culinaires confites dans la tradition ancestrale.",
    GPS: [45.764193047388254, 4.836881252815976],
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

const sectionCardsTitle = document.querySelector(".sectionCardsTitle");
const restauStar = restaurants.filter((restaurant) => restaurant.wildstar >= 4);
const btncities = document.querySelectorAll(".btncities");

btncities.forEach((btn) => {
  btn.addEventListener("click", function () {
    // 'this' fait référence au bouton cliqué
    const locationRestau = restaurants.filter(
      (restaurant) => restaurant.location == this.innerText
    );
    sectionCardsTitle.innerHTML = `Les Restaurants a ${this.innerText}`;
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
