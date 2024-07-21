let cart = [];

function addToCart(productName) {
    cart.push(productName);
    updateCartUI();
}

function updateCartUI() {
    const cartItemsElement = document.getElementById('cartItems');
    cartItemsElement.innerHTML = '';  // Clear current cart items
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartItemsElement.appendChild(li);
    });
}
