/*Step 51
In the game, the player will interact with different checkpoints. If the isCheckpointCollisionDetectionActive is false, then you will need to stop the player's movements on the x and y axes.

Start by creating an if statement where the condition checks if the isCheckpointCollisionDetectionActive is false.

Remember that you can use the ! operator to check if the variable is false.*/



const movePlayer = (key, xVelocity, isPressed) => {
  if(!isCheckpointCollisionDetectionActive){
    player.position.x=0;
     player.position.y=0
  }
}