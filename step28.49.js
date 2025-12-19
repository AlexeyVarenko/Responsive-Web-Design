/*Step 49
Add an else clause that assigns the number 0 to the player's x velocity.*/



if (keys.rightKey.pressed && player.position.x < proportionalSize(400)) {
    player.velocity.x = 5;
  } else if (keys.leftKey.pressed && player.position.x > proportionalSize(100)) {
    player.velocity.x = -5;
  }else{
    player.velocity.x = 0;
  }