/*Step 24
When the player jumps up, you will need to add the logic for adjusting its velocity.

Use the addition assignment operator to add the velocity's y coordinate to the player's y position.

Don't forget to include the this keyword for the velocity and position.*/



  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

  }