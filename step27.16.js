/*Step 16
The this keyword in JavaScript is used to refer to the current object. Depending on where this is used, what it references changes. In the case of a class, it refers to the instance of the object being constructed. You can use the this keyword to set the properties of the object being instantiated. Here is an example:

Example Code
class Computer {
  constructor() {
    this.ram = 16;
  }
}
In your constructor, use the this keyword to set the items property to an empty array. Also, set the total property to 0, and the taxRate property to 8.25.*/


class ShoppingCart {
  constructor() {
    this.items=[];
    this.total=0;
    this.taxRate=8.25;
  }
};