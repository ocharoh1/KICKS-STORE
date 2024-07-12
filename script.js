//add to cart
function addToCart() {
    var cart = document.getElementById('cart');
    var cartItems = cart.innerHTML;
    cartItems++;
    cart.innerHTML = cartItems;
}
//remove from cart
function removeFromCart() {
    var cart = document.getElementById('cart');
    var cartItems = cart.innerHTML;
    cartItems--;
    cart.innerHTML = cartItems;
}
// show number of products in cart
function showCart() {
    var cart = document.getElementById('cart');
    var cartItems = cart.innerHTML;
    alert('You have ' + cartItems + ' items in your cart');
}
//capture all details of product in cart
function showCartDetails() {
    var cart = document.getElementById('cart');
    var cartItems = cart.innerHTML;
    var product = document.getElementById('product').innerHTML;
    var price = document.getElementById('price').innerHTML;
    alert('You have ' + cartItems + ' items in your cart. Product: ' + product + ' Price: ' + price);
}
