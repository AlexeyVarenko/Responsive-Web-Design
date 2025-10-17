/*Step 23
You’re on the right track! However, let’s take a moment to address a common issue when working with objects in JavaScript.

When you try to access an object property that doesn’t exist, JavaScript returns undefined. If you then attempt to perform arithmetic operations on undefined, it can lead to unexpected results, such as NaN.

To prevent this, you can use the || (logical OR) operator to provide a default value.

Example Code
  let scores = {}; 
  let players = ["Alice", "Bob", "Charlie"];

  players.forEach(player => {
    scores[player] = scores[player] || 0;
  });
Now, let’s apply this concept to your totalCountPerProduct object in the forEach callback. Make sure that each dessert.id property is initialized properly.

Initialize totalCountPerProduct[dessert.id] with a default value of 0 using the || operator.*/



addItem(id, products) {
    const product = products.find((item) => item.id === id);
    const { name, price } = product;
    this.items.push(product);

    const totalCountPerProduct = {};
    this.items.forEach((dessert) => {
      totalCountPerProduct[dessert.id] = totalCountPerProduct[dessert.id] || 0
    })
  }