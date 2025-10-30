/*Step 41
You need a way to access the total number of items in the cart. The best way to do this is to add another method to your ShoppingCart class, rather than accessing the items array directly.

Add a getCounts method to the ShoppingCart class. It should return the number of items in the items array.*/



getCounts(){
  return this.items.length;
}