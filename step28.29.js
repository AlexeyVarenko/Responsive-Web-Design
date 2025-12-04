/*Step 29
Below your inner if statement, use the addition assignment operator to add gravity to the y velocity.*/



if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      if (this.position.y < 0) {
        this.position.y = 0;
        this.velocity.y = gravity;
      }
      this.velocity.y +=gravity;

    }