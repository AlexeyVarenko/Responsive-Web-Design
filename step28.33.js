/*Step 33
For the last condition, you will need to check if the player's x position has exceeded the right edge of the canvas. If it has, you will need to set the player's x position to the maximum value so the player does not accidentally go off screen to the right.

Inside your update method, create an if statement that checks if this.position.x >= canvas.width - this.width * 2.*/



if (this.position.x >= canvas.width - this.width * 2){
    
  }