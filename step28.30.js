/*Step 30
Add an else clause that assigns 0 to this.velocity.y.*/




    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      if (this.position.y < 0) {
        this.position.y = 0;
        this.velocity.y = gravity;
      } 
      this.velocity.y += gravity;
    } else {
      this.velocity.y=0;
    }