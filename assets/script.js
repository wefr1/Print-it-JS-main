const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Initialisation de l'image courante à 0
let currentimg = 0;

// Récupération des images et des textes
function sliderImg(n) {
  document.querySelector(".banner-img").src =
    "./assets/images/slideshow/" + slides[n].image;
  document.querySelector("p").innerHTML = slides[n].tagLine;
}

// Initialisation de la variable pour les "dots"
const dots = document.querySelector(".dots");

// Récupère les boutons de navigation
const arrowleft = document.querySelector(".arrow_left");
const arrowright = document.querySelector(".arrow_right");

// Ajout d'un Event Listeners sur la flèche gauche
arrowleft.addEventListener("click", () => {
  console.log("j'ai cliqué à gauche");

  // Conditions pour afficher le slide précédent
  // Si ce n'est pas la dernière image du tableau, on passe à l'image précédente
  // Si on atteint la dernière image du tableau, on revient à la première image
  if (currentimg < slides.length) {
    currentimg--;
  }
  if (currentimg < 0) {
    currentimg = slides.length - 1;
  }
  sliderImg(currentimg);
  navdots(currentimg);
});

// Ajout d'un Event Listeners sur la flèche droite
arrowright.addEventListener("click", () => {
  console.log("j'ai cliqué à droite");

  // Conditions pour afficher le slide suivant
  // Si ce n'est pas la dernière image du tableau, on passe à l'image suivante
  // Si on atteint la dernière image du tableau, on revient à la première image
  if (currentimg < slides.length) {
    currentimg++;
  }
  if (currentimg === slides.length) {
    currentimg = 0;
  }
  sliderImg(currentimg);
  navdots(currentimg);
});

// Boucle pour créer les bullet points en fonction du nombre de slides
for (let i = 0; i < slides.length; i++) {
  let dot = document.createElement("div");
  dot.classList.add("dot");
  dots.appendChild(dot);

  if (i === 0) {
    dot.classList.add("dot_selected");
  }
  // Ajout d'un écouteur d'événement sur chaque bullet point
  dot.addEventListener("click", () => {
    console.log("clickdot");
  });
}

// Ajout de la classe active sur le bullet point qui signale le slide en cours de visionnage
function navdots(n) {
  const dotarray = document.querySelectorAll(".dot");
  dotarray.forEach(function (dot) {
    dot.classList.remove("dot_selected");
  });
  dotarray[n].classList.add("dot_selected");
}
