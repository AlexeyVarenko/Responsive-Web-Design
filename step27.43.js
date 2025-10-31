/*Step 43
You also need to update the total price of the cart when the user adds an item. Create a calculateTotal method in the ShoppingCart class.

In that method, declare a subTotal variable and use the reduce method on the items array to calculate the sum of the price property of each item in the array. Use total and item as the parameters for your callback.

Remember to set your initial value in the reduce method.*/



calculateTotal(){
  const subTotal=this.items.reduce((total, item)=>
   total+item.price,0)
}