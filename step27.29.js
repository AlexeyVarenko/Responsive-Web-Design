/*Step 29
For your falsy expression, you'll need to add new HTML to your productsContainer. Start by removing the undefined, then use the addition assignment operator and template literal syntax to add a div with the class set to product and the id set to dessert${id} to the innerHTML property of the productsContainer.*/



addItem(id, products) {
    const product = products.find((item) => item.id === id);
    const { name, price } = product;
    this.items.push(product);

    const totalCountPerProduct = {};
    this.items.forEach((dessert) => {
      totalCountPerProduct[dessert.id] = (totalCountPerProduct[dessert.id] || 0) + 1;
    })

    const currentProductCount = totalCountPerProduct[product.id];
    const currentProductCountSpan = document.getElementById(`product-count-for-id${id}`);

    currentProductCount > 1 
      ? currentProductCountSpan.textContent = `${currentProductCount}x`
      : productsContainer.innerHTML+=`<div class="product" id="dessert${id}"></div>`;
  }