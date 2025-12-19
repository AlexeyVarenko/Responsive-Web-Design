/*Step 48
Add an else if statement where the condition checks if the left key was pressed and the player's x position is greater than proportionalSize(100). You need to use the proportionalSize function here to make sure the player's x position is always proportional to the screen size.

Inside the else if statement, assign the number -5 to the player's x velocity.*/



if (keys.rightKey.pressed && player.position.x < proportionalSize(400)) {
    player.velocity.x = 5;
  }else if (keys.leftKey.pressed && player.position.x > proportionalSize(100)){
    player.velocity.x = -5;
  }