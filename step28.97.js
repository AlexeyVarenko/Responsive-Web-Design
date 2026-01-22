/*Step 97
Below the checkpoint's width and height properties, use the this keyword to add a new claimed property and assign it the value of false. This property will be used to check if the player has reached the checkpoint.*/



class CheckPoint {
  constructor(x, y, z) {
    this.position = {
      x,
      y,
    };
    this.width = proportionalSize(40);
    this.height = proportionalSize(70);
    this.claimed=false
  };
};