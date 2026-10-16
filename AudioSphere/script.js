let products = [
    {
        name: "Wireless Headphones",
        price: 2499,
        description: "Good for listening to music and watching movies.",
        battery: "30 hours"
    },
    {
        name: "Wireless Earbuds",
        price: 1499,
        description: "Small earbuds that are easy to carry anywhere.",
        battery: "24 hours with case"
    },
    {
        name: "Bluetooth Speaker",
        price: 1999,
        description: "Play music at home or when travelling.",
        battery: "12 hours"
    },
    {
        name: "Studio Headphones",
        price: 3499,
        description: "Useful for listening to music with clear sound.",
        battery: "40 hours"
    }
];

let cart = [];

function showDetails(index) {
    let product = products[index];

    document.getElementById("details-box").innerHTML =
        "<h3>" + product.name + "</h3>" +
        "<p>Price: ₹" + product.price + "</p>" +
        "<p>" + product.description + "</p>" +
        "<p>Battery Life: " + product.battery + "</p>";

    document.getElementById("details").scrollIntoView();
}

function addToCart(index) {
    cart.push(products[index]);
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    let total = 0;

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "Your cart is empty.";
    }

    for (let i = 0; i < cart.length; i++) {
        total = total + cart[i].price;

        cartItems.innerHTML +=
            '<div class="cart-item">' +
            '<span>' + cart[i].name + ' - ₹' + cart[i].price + '</span>' +
            '<button onclick="removeFromCart(' + i + ')">Remove</button>' +
            '</div>';
    }

    document.getElementById("total-price").innerText = total;
    document.getElementById("cart-count").innerText = cart.length;
}

function clearCart() {
    cart = [];
    updateCart();
}