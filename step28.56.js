/*Step 56
Below your if statement, use the subtraction assignment operator to subtract the xVelocity from player.velocity.x.

To close out this case, make sure to add a break statement.*/



switch (key) {
    case "ArrowLeft":
      keys.leftKey.pressed = isPressed;
      if (xVelocity === 0) {
        player.velocity.x = xVelocity;
      }
      player.velocity.x-=xVelocity;
      break;
  }