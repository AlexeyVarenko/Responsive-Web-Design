/*Step 12Passed
After your h2 element, create two p elements. Give the first a class of dessert-price, and set the text to a dollar sign "$" followed by the value of the price variable. Give the second a class of product-category, and the text "Category: " followed by the value of the category variable.*/



products.forEach(
  ({ name, id, price, category }) => {
    dessertCards.innerHTML += `
      <div class="dessert-card">
        <h2>${name}</h2>
        <p class="dessert-price">$${price}</p>
        <p class="product-category">Category: ${category}</p>

      </div>
    `;
  }
);