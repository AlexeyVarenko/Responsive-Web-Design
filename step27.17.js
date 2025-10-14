/*Step 17
Your ShoppingCart class needs the ability to add items. Create an empty addItem method, which takes two parameters: id and products. Creating a method might look like this:

Example Code
class Computer {
  constructor() {
    this.ram = 16;
  }

  addRam(amount) {
    this.ram += amount;
  }
}
The first parameter, id, is the id of the product the user has added to their cart. The second parameter, products, is an array of product objects. By using a parameter instead of directly referencing your existing products array, this method will be more flexible if you wanted to add additional product lists in the future.*/



class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
    this.taxRate = 8.25;
  }
  addItem(id, products){
    
  }

};