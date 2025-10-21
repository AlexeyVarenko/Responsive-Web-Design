/*Step 27
The behavior of the addItem method needs to change if the product is already in the cart or not. Create a ternary that checks if the current product is already in the cart. Use undefined for both the truthy and falsy expressions to avoid a syntax error.*/



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
    return currentProductCount > 1? undefined: undefined;

  }