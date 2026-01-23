/*Step 99
The last method you will need to add to the CheckPoint class is the claim method.

Inside the claim method, assign 0 to the width and height properties of the CheckPoint instance.

Below those properties, assign Infinity to the y position.

Lastly, assign true to the claimed property.*/




class CheckPoint {
  constructor(x, y, z) {
    this.position = {
      x,
      y,
    };
    this.width = proportionalSize(40);
    this.height = proportionalSize(70);
    this.claimed = false;
  };

  draw() {
    ctx.fillStyle = "#f1be32";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  claim () {
    this.width=0;
    this.height=0;

    this.position.y=Infinity;
    this.claimed=true;
  }

};




