/*Step 16
Below your position object, use the this keyword to set the velocity property to an object.

Inside that new velocity object, create a key called x with a value of 0 and a new key called y with a value of 0.

The velocity property will be used to store the player's speed in the x and y directions.*/



class Player {
  constructor() {
    this.position = {
      x: proportionalSize(10),
      y: proportionalSize(400),
    };
  this.velocity={
    x:0,
    y:0
  }
  }
}