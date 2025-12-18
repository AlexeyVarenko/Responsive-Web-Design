/*Step 47
Inside the if statement, assign the number 5 to the player's x velocity.*/



if (keys.rightKey.pressed && player.position.x < proportionalSize(400)) {
    player.velocity.x=5;
  }