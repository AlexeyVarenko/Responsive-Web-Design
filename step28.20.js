/*Step 20
Below your ctx.fillStyle, you need to create the player's shape by calling the fillRect() method on the ctx object which you instantiated earlier.

Example Code
fillRect(x, y, width, height)
Inside the fillRect() method add the this.position.x, this.position.y, this.width and this.height values.*/



draw() {
    ctx.fillStyle = "#99c9ff";
    ctx.fillRect(this.position.x,this.position.y, this.width, this.height)
  }