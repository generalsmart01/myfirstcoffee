// HAMBURGER MENU

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar");
const bars = document.querySelectorAll(".bar");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  const isOpen = navMenu.classList.contains("active");
  navMenu.setAttribute("aria-expanded", isOpen ? "true" : "false");

  // Change bar color when hamburger is active
  bars.forEach((bar) => {
    bar.style.backgroundColor = isOpen ? "#FFF9F1" : "#54400E";
  });
});

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navMenu.setAttribute("aria-expanded", "false");

    // Reset bar color when menu is closed
    bars.forEach((bar) => {
      bar.style.backgroundColor = "#54400E";
    });
  })
);

// SHOP MEALS

const productCardWrapper = document.getElementById("product-card-wrapper");
const buttons = document.querySelectorAll(".btn");

const products = [
  {
    name: "Espresso",
    image: "../img/expresso.png",
    price: "2000",
    tag: "coffee",
  },
  { name: "Pancake", image: "../img/pancake.png", price: "3000", tag: "food" },
  {
    name: "caramel macchiato",
    image: "../img/machiato.png",
    price: "3500",
    tag: "coffee",
  },
  {
    name: "ham cheese",
    image: "../img/ham-cheesse.png",
    price: "3000",
    tag: "food",
  },
  { name: "latte", image: "../img/Latte.png", price: "3000", tag: "coffee" },
  {
    name: "yam chips",
    image: "../img/yam-chips-flip.png",
    price: "3000",
    tag: "food",
  },
  {
    name: "americano",
    image: "../img/americano.png",
    price: "3000",
    tag: "coffee",
  },
  {
    name: "chicken wing",
    image: "../img/chicken-wing.png",
    price: "3000",
    tag: "food",
  },
  { name: "latte", image: "../img/Latte.png", price: "3000", tag: "coffee" },
  {
    name: "chicken wrap",
    image: "../img/chicken-wrap.png",
    price: "3000",
    tag: "food",
  },
  { name: "mocha", image: "../img/mocha.png", price: "3500", tag: "coffee" },
  {
    name: "classic sandwich",
    image: "../img/classic-sandwich.png",
    price: "3000",
    tag: "food",
  },
  {
    name: "cappuccino",
    image: "../img/cappucino.png",
    price: "3000",
    tag: "coffee",
  },
  {
    name: "chicken quesadilla",
    image: "../img/quesadillas.png",
    price: "3000",
    tag: "food",
  },
  { name: "mocha", image: "../img/mocha2.png", price: "3000", tag: "coffee" },
  {
    name: "chicken ham",
    image: "../img/chicken-ham.png",
    price: "3000",
    tag: "food",
  },
];

// Function to display products based on the selected tag
function displayProducts(selectedTag) {
  productCardWrapper.innerHTML = ""; // Clear existing content

  const filteredProducts =
    selectedTag === "all"
      ? products
      : products.filter((product) => product.tag === selectedTag);

  filteredProducts.forEach((product) => {
    const productCard = `
      <div class="product-card">
        <div class="product-img">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-card-details">
          <h4 class="title">${product.name}</h4>
          <p class="price">${product.price}</p>
          <div class="order-btn-wrapper">
            <button class="order-btn">Order</button>
          </div>
        </div>
      </div>
    `;
    productCardWrapper.innerHTML += productCard;
  });
}

// Event listeners for buttons
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove 'active' class from all buttons
    buttons.forEach((btn) => btn.classList.remove("active"));

    // Add 'active' class to the clicked button
    this.classList.add("active");

    // Display products based on the selected tag
    const selectedTag = this.getAttribute("data-tag");
    displayProducts(selectedTag);
  });
});

// Display all products by default on initial load
displayProducts("all");
