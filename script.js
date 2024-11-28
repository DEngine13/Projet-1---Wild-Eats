const restaurants = [
  {
    name: "Choucrouterie",
    location: "Paris",
    Vegan: true,
    wildstar: "5",
    Picture: "Strasbourgchurch-625211_1280.jpg",
    Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam"
  },
  {
    name: "Le Loreum",
    location: "Lyon",
    Vegan: "oui",
    wildstar: "4",
    Picture: "paris-4563750_1280.jpg",
    Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam"
  },
  {
    name: "Pixelite",
    location: "Marseille",
    Vegan: "non",
    wildstar: "4",
    Picture: "marseille-7352728_1280.jpg",
    Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam"
  },
  {
    name: "Grid a Volonté",
    location: "Strasbourg",
    Vegan: "non",
    wildstar: "2",
    Picture: "Lyon-basilica-2382830_1280.jpg",
    Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam"
  },
];

// GENERATION CARD AU LANCEMENT DE LA PAGE
const restauStar = restaurants.filter((restaurant) => restaurant.wildstar >= 4);


function createCard(restau) {
  const cards = document.querySelector(".container-stars");
  const sectionStar = document.querySelector(".stars");
  // On efface à chaque execution de la fonction les précédentes cards.
  cards.innerHTML = "";

  // On utilise la méthode forEach qui permet de boucler sur un tableau autant de fois qu'il y a d'éléments
  // dans le tableau

  restau.forEach((restau) => {
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
    
    // Création de la div card-des
    const cardDes = document.createElement("p");
    cardDes.classList.add("card-des");
    cardDes.innerHTML = restau.Description;
    card.appendChild(cardDes);

    const rank = document.createElement('p');
    rank.innerHTML = `${restau.wildstar}  ★`
    rank.style.fontSize = "1.5rem"
    card.appendChild(rank)
  });
}

createCard(restauStar)



// MENU BURGER

const hamMenu = document.querySelector('.burger-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener ('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})


