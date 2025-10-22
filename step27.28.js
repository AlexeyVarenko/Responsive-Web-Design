/*Step 28
For your truthy expression, removing the undefined, you need to update the textContent of the currentProductCountSpan to be the currentProductCount followed by an x. Use a template literal to do so.*/



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

    currentProductCount > 1 ? currentProductCountSpan.textContent=`${currentProductCount}x` : undefined;
  }