/*Step 25
Now you need to get prepared to update the display with the new product the user added. Declare a currentProductCount variable, and assign it the value of the totalCountPerProduct object's property matching the id of product.*/



addItem(id, products) {
    const product = products.find((item) => item.id === id);
    const { name, price } = product;
    this.items.push(product);
    const currentProductCount=totalCountPerProduct[product.id]

    const totalCountPerProduct = {};
    this.items.forEach((dessert) => {
      totalCountPerProduct[dessert.id] = (totalCountPerProduct[dessert.id] || 0) + 1;
    })

    
  }