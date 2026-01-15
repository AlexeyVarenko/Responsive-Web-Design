/*Step 86
Next, add an if statement that checks if every rule in the collisionDetectionRules array is truthy. Make sure to use the every method for this.

Inside the body of the if statement, assign the number 0 to the player's y velocity followed by a return statement.*/



if (collisionDetectionRules.every((rule) => rule)) {
      player.velocity.y = 0;
      return;
    }