/*Step 27
Inside the inner if statement, assign 0 to the player's y position.*/



 if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      if (this.position.y < 0) {
        this.position.y = 0
      }
    }