/*Step 23
When the player moves to the right, you will need to adjust its velocity.

Use the addition assignment operator to add the velocity's x coordinate to the player's x position.

Don't forget to include the this keyword for the velocity and position.*/



  update() {
    this.draw();
    this.position.x+=this.velocity.x;
  }