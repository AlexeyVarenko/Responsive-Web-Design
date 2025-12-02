/*Step 25
Right now, when the player jumps up, it is possible for it to move past the height of the canvas.

To fix that, you will need to add a condition to stop the player from falling past the height of the canvas.

Create an empty if statement that checks if the sum of the player's y position, height, and y velocity is less than or equal to the height of the canvas.*/


  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if(this.position.y+this.height+this.velocity.y <=canvas.height){
      
    }
  }