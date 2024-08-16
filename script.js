const productCardWrapper = document.getElementById('product-card-wrapper');

const products = [
    {
        name: "Espresso",
        image: "../img/expresso.png",
        price: "2000",
    },
    {
        name: "Pancake",
        image: "../img/pancake.png",
        price: "3000",
    },
    {
        name: "caramel macchiato",
        image: "../img/machiato.png",
        price: "3500",
    },
    {
        name: "ham cheese",
        image: "../img/ham-cheesse.png",
        price: "3000",
    },
    {
        name: "latte",
        image: "../img/Latte.png",
        price: "3000",
    },
    {
        name: "yam chips",
        image: "../img/yam-chips-flip.png",
        price: "3000",
    },
    {
        name: "americano",
        image: "../img/americano.png",
        price: "3000",
    },
    {
        name: "chicken wing",
        image: "../img/chicken-wing.png",
        price: "3000",
    },
    {
        name: "latte",
        image: "../img/Latte.png",
        price: "3000",
    },
    {
        name: "chicken wrap",
        image: "../img/chicken-wrap.png",
        price: "3000",
    },
    {
        name: "mocha",
        image: "../img/mocha.png",
        price: "3500",
    },
    {
        name: "classic sandwich",
        image: "../img/classic-sandwich.png",
        price: "3000",
    },
    {
        name: "cappuccino",
        image: "../img/cappucino.png",
        price: "3000",
    },
    {
        name: "chicken quesadilla",
        image: "../img/quesadillas.png",
        price: "3000",
    },
    {
        name: "mocha",
        image: "../img/mocha2.png",
        price: "3000",
    },
    {
        name: "chicken ham",
        image: "../img/chicken-ham.png",
        price: "3000",
    },
];

products.map(product => {
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
