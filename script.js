const restaurants = [
  {
      "name": "Choucrouterie",
      "location": "Paris",
      "Vegan": "non",
      "wildstar": "5"
  },
  {
    "name": "Le Loreum",
    "location": "Lyon",
    "Vegan": "oui",
    "wildstar": "4"
},
{
  "name": "Pixelite",
  "location": "Marseille",
  "Vegan": "non",
  "wildstar": "3"
},
{
  "name": "Grid a Volonté",
  "location": "Strasbourg",
  "Vegan": "non",
  "wildstar": "2"
},
]

const hamMenu = document.querySelector('.burger-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener ('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})
