/*Step 13
Finally, after your p elements, create a button element. Give it an id set to the value of the id variable, a class of btn add-to-cart-btn, and use "Add to cart" for the text.*/



products.forEach(
  ({ name, id, price, category }) => {
    dessertCards.innerHTML += `
      <div class="dessert-card">
        <h2>${name}</h2>
        <p class="dessert-price">$${price}</p>
        <p class="product-category">Category: ${category}</p>
        <button id=${id} class="btn add-to-cart-btn">Add to cart</button>
      </div>
    `;
  }
);