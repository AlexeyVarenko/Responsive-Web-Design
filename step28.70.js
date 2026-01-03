/*Step 70
Inside the draw method, assign "#acd157" to the ctx.fillStyle.

Below that, call the ctx.fillRect method and pass in the x and y coordinates, along with the width and height properties. Remember to include this before each property.*/



class Platform {
    constructor(x, y) {
      this.position = {
        x,
        y,
      };
      this.width = 200;
      this.height = proportionalSize(40);
    }
    draw() {
      ctx.fillStyle="#acd157";
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
  }