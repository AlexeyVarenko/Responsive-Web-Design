/*Step 57
The player can jump up by using the up arrow key or the spacebar.

Add three new cases for "ArrowUp", " ", and "Spacebar". Remember that you can group cases together when they share the same operation.

Inside those cases, use the subtraction assignment operator to subtract 8 from player.velocity.y.

To close out these cases, make sure to add a break statement.*/



switch (key) {
    case "ArrowLeft":
      keys.leftKey.pressed = isPressed;
      if (xVelocity === 0) {
        player.velocity.x = xVelocity;
      }
      player.velocity.x -= xVelocity;
      break;
    case "ArrowUp":
    player.velocity.y-=8;
    break;
    case " ":
    player.velocity.y-=8;
    break;
    case "Spacebar":

  }