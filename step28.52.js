/*Step 52
Inside the if statement, set the player's x velocity to 0 and the player's y velocity to 0.

Below that, add a return statement.*/



const movePlayer = (key, xVelocity, isPressed) => {
  if (!isCheckpointCollisionDetectionActive) {
    player.velocity.x=0;
    player.velocity.y=0;
    return
  }
}