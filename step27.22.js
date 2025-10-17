/*Step 22
Use the .forEach() method to loop through the items array. Pass an empty callback function that takes a single parameter dessert.*/



addItem(id, products) {
    const product = products.find((item) => item.id === id);
    const { name, price } = product;
    this.items.push(product);
    this.items.forEach((dessert)=>{
      
    })
    const totalCountPerProduct = {};

  }