/*Step 11
In your template literal, create a div element with a class of dessert-card. In that div, create an h2 element and give it the text of the name variable.*/



products.forEach(
  ({ name, id, price, category }) => {
    dessertCards.innerHTML += `
  <div class="dessert-card">
  <h2>${name}</h2>
  </div>
    `;
  }
);