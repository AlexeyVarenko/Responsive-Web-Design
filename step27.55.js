/*Step 55
The first thing you should do is check if the items array is empty. If it is, display an alert to the user with the text Your shopping cart is already empty, then return from the function.

Remember that 0 is a falsy value, so you can use the ! operator to check if the array is empty.

After displaying the alert, return from the function to stop execution*/



 clearCart() {
    if (!this.items.length){
      alert ("Your shopping cart is already empty")
      return;
    }
  }