/*Step 18
You need to find the product that the user is adding to the cart. Remember that arrays have a .find() method. In your addItem function, declare a product variable, and assign it the value of calling the .find() method on the products array.

For the callback to .find(), pass a function that takes a single parameter item, and returns whether the id property of item is strictly equal to the id parameter passed to addItem.*/




  addItem(id, products) {
    const product=products.find((item)=>item.id===id)
  }