/*Step 55
Inside the case clause, assign isPressed to keys.leftKey.pressed.

Below that, add an if statement that checks if xVelocity is equal to 0. If so, assign the xVelocity to player.velocity.x.*/




switch (key) {
    case "ArrowLeft":
  keys.leftKey.pressed=isPressed;
  if(xVelocity===0){
    player.velocity.x=xVelocity;
  }
  }