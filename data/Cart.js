export let Cart = JSON.parse(localStorage.getItem("cart"));

if (!Cart) {
  Cart = [
    { productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6", quantity: 2 },
    { productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d", quantity: 1 },
  ];
}

function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(Cart));
}
export function updateCartQuantity() {
  let quantityOfCart = 0;
  Cart.forEach((item) => {
    quantityOfCart += item.quantity;
  });
  document.querySelector(".cart-quantity").innerHTML = quantityOfCart;
}
export function addToCart(productId) {
  let matchingItem;
  Cart.forEach((item) => {
    if (item.productId === productId) matchingItem = item;
  });
  if (matchingItem) {
    matchingItem.quantity++;
  } else {
    Cart.push({ productId, quantity: 1 });
  }
  saveToStorage();
}
export function removeFromCart(productId) {
  const newCart = Cart.filter((cartItem) => cartItem.productId !== productId);
  Cart = newCart;
  saveToStorage();
}
