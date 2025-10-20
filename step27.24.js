/*Step 24
In the forEach callback, wrap the right-hand assignment totalCountPerProduct[dessert.id] || 0 in parentheses () to ensure proper evaluation, then increment the value by one.*/assignment


 addItem(id, products) {
    const product = products.find((item) => item.id === id);
    const { name, price } = product;
    this.items.push(product);

    const totalCountPerProduct = {};
    this.items.forEach((dessert) => {
      totalCountPerProduct[dessert.id] = (totalCountPerProduct[dessert.id] || 0) + 1;
    })

    
  }