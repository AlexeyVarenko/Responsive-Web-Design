/*Step 28
Below the this.position.y = 0, assign gravity to the velocity's y position.*/



if (this.position.y < 0) {
        this.position.y = 0;
        this.velocity.y=gravity;
      }