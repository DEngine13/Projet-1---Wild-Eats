const restaurants = [
  {
    name: "Choucrouterie",
    location: "Paris",
    Vegan: true,
    wildstar: "5",
    Picture: "",
  },
  {
    name: "Le Loreum",
    location: "Lyon",
    Vegan: "oui",
    wildstar: "4",
    Picture: "",
  },
  {
    name: "Pixelite",
    location: "Marseille",
    Vegan: "non",
    wildstar: "4",
    Picture: "",
  },
  {
    name: "Grid a Volonté",
    location: "Strasbourg",
    Vegan: "non",
    wildstar: "2",
    Picture: "",
  },
];

// GENERATION CARD AU LANCEMENT DE LA PAGE

{
  /* <div class="card">
          <div class="card-image-container"></div>
          <h3 class="card-title">Card Title</h3>
          <p class="card-des">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            inventore natus modi
          </p>
        </div> */
}

const restauStar = restaurants.filter((restaurant) => restaurant.wildstar > 3);

const cards = document.querySelector(".container-stars");
cards.innerHTML = "";

