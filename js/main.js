// HAMBURGER

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLink.forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// ORDERS

let orders = [];

function addToOrder(name, price) {
  let existingOrder = orders.find((order) => order.name === name);

  if (existingOrder) {
    existingOrder.quantity += 1;
  } else {
    orders.push({ name, price, quantity: 1 });
  }

  updateOrderPage();
}

function updateOrderPage() {
  const orderContainer = document.querySelector(".orders");
  orderContainer.innerHTML = "";

  let subTotal = 0;

  orders.forEach((order) => {
    subTotal += order.price * order.quantity;

    const orderItem = document.createElement("div");
    orderItem.classList.add("order-item");
    orderItem.innerHTML = `
            <img src="${order.name.toLowerCase().replace(" ", "_")}.jpg" alt="${
      order.name
    }">
            <p>${order.name}</p>
            <p>${order.price} x ${order.quantity}</p>
            <button onclick="removeOrder('${order.name}')">Remove</button>
        `;

    orderContainer.appendChild(orderItem);
  });

  document.getElementById("sub-total").textContent = subTotal;
  document.getElementById("total-price").textContent = subTotal + 40; // Including delivery fee
}

function removeOrder(name) {
  orders = orders.filter((order) => order.name !== name);
  updateOrderPage();
}

function payNow() {
  alert("Payment Successful!");
}
