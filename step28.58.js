/*Step 58
The last case you will need to add will be for "ArrowRight".

Inside that case, assign isPressed to keys.rightKey.pressed.

Add an if statement that checks if xVelocity is equal to 0. If so, assign the xVelocity to player.velocity.x.

Below that if statement, use the addition assignment operator to assign the xVelocity to player.velocity.x.*/




switch (key) {
    case "ArrowLeft":
      keys.leftKey.pressed = isPressed;
      if (xVelocity === 0) {
        player.velocity.x = xVelocity;
      }
      player.velocity.x -= xVelocity;
      break;
    case "ArrowUp":
    case " ":
    case "Spacebar":
      player.velocity.y -= 8;
      break;
      case "ArrowRight":
      keys.rightKey.pressed=isPressed;
      if(xVelocity===0){
        player.velocity.x=xVelocity;
      }
    player.velocity.x +=xVelocity
  }