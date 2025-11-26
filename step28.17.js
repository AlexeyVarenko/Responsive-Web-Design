/*Step 17
Below your velocity object, use the this keyword to set the width property to proportionalSize(40).

Below your width property, use the this keyword to set the height property to proportionalSize(40).

You are using the proportionalSize() function here to set the width and height properties of your class to be proportional to the height of the screen.*/



class Player {
  constructor() {
    this.position = {
      x: proportionalSize(10),
      y: proportionalSize(400),
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
  this.width=proportionalSize(40)
  this.height=proportionalSize(40)
  }
}