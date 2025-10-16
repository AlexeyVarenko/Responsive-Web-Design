/*Step 21
You now need a total count of each product that the user has in the cart. Declare a totalCountPerProduct variable, and assign it an empty object.*/



addItem(id, products) {
    const product = products.find((item) => item.id === id);
    const { name, price } = product;
    this.items.push(product);
    const totalCountPerProduct={};

  }