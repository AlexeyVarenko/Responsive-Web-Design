/*Step 20
Now you need to push the product into the cart's items array. Remember to use the this keyword.*/



  addItem(id, products) {
    const product = products.find((item) => item.id === id);
    const { name, price } = product;
    this.items.push(product);
  }