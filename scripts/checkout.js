import { Cart, removeFromCart } from "../data/cart.js";
import { products } from "../data/products.js";

const renderCart = () => {
  let checkoutHTML = ``;
  Cart.forEach((cartItem, index) => {
    let selectedItem;
    products.forEach((product) => {
      if (product.id === cartItem.productId) {
        selectedItem = product;
      }
    });

    let html = `
         <div class="cart-item-container">
            <div class="delivery-date">Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image" src="${selectedItem.image}" />

              <div class="cart-item-details">
                <div class="product-name">${selectedItem.name}</div>
                <div class="product-price">$${(selectedItem.priceCents / 100).toFixed(2)}</div>
                <div class="product-quantity">
                  <span> Quantity: <span class="quantity-label">${cartItem.quantity}</span> </span>
                  <span class="update-quantity-link link-primary"> Update </span>
                  <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${selectedItem.id}"> Delete </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">Choose a delivery option:</div>
                <div class="delivery-option">
                  <input type="radio" checked class="delivery-option-input" name="delivery-option-${index}" />
                  <div>
                    <div class="delivery-option-date">Tuesday, June 21</div>
                    <div class="delivery-option-price">FREE Shipping</div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" class="delivery-option-input" name="delivery-option-${index}" />
                  <div>
                    <div class="delivery-option-date">Wednesday, June 15</div>
                    <div class="delivery-option-price">$4.99 - Shipping</div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" class="delivery-option-input" name="delivery-option-${index}" />
                  <div>
                    <div class="delivery-option-date">Monday, June 13</div>
                    <div class="delivery-option-price">$9.99 - Shipping</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `;
    checkoutHTML += html;
  });

  document.querySelector(".order-summary").innerHTML = checkoutHTML;
  document.querySelectorAll(".js-delete-link").forEach((link) => {
    link.addEventListener("click", () => {
      removeFromCart(link.dataset.productId);
      renderCart();
    });
  });
};

renderCart();
