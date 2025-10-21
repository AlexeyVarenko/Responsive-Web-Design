/*Step 26
You haven't written the code to generate the HTML yet, but if a product has already been added to the user's cart then there will be a matching element which you'll need.

Use .getElementById() to get the matching element - you'll be setting the id value to product-count-for-id${product.id}, so use a template literal to query that value.

Assign your query to a currentProductCountSpan variable.*/



  addItem(id, products) {
    const product = products.find((item) => item.id === id);
    const { name, price } = product;
    this.items.push(product);

    const totalCountPerProduct = {};
    this.items.forEach((dessert) => {
      totalCountPerProduct[dessert.id] = (totalCountPerProduct[dessert.id] || 0) + 1;
    })

    const currentProductCount = totalCountPerProduct[product.id];
    const currentProductCountSpan=document.getElementById(`product-count-for-id${product.id}`)
  }