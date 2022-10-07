// NAVBAR

const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

// TRIPS

const trips = [
  {
    id: 1,
    destination: "SITGES",
    img: "sitges.jpg",
    text: "Dolor sit amet consectetur adipisicing elit. Temporibus stias voluptatum quasi. Quasiullam sit quam repellendus corporis!",
  },
  {
    id: 2,
    destination: "TARRAGONA",
    img: "tarragona.jpg",
    text: "Temporibus stias voluptatum quasi. Quasiullam sit quam repellendus corporis!",
  },
  {
    id: 3,
    destination: "BARCELONA",
    img: "barna.jpg",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus stias voluptatum quasi. Quasiullam sit quam repellendus corporis!",
  },
  {
    id: 4,
    destination: "CADAQUES",
    img: "cadaques.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustoasperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste,doloremque nihil?",
  },
];

const destination = document.querySelector("#destination");
const img = document.querySelector("#offer-img");
const text = document.querySelector("#info");

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

function showPerson() {
  const item = trips[currentItem];
  img.src = item.img;
  destination.textContent = item.destination;
  text.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > trips.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = trips.length - 1;
  }
  showPerson();
});

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * trips.length);
  showPerson();
});
