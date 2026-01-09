/*Step 78
If you try to start the game, you will notice that the platforms are rendered on the screen. But as the player moves to the right, the platform does not move with it.

To fix this issue, you will need to update the platform's x position as the player moves across the screen.

Inside the animate function, add a condition to check if the right key was pressed and if the isCheckpointCollisionDetectionActive is true.*/


if (keys.rightKey.pressed && isCheckpointCollisionDetectionActive){
  
}