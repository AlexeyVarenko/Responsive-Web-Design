/*Step 117
The last thing you will need to do is add an else if statement.

Your condition should check if the player's x position is greater than or equal to the checkpoint's x position and less than or equal to the checkpoint's x position plus 40.

Inside the body of the else if statement, you will need to call the showCheckpointScreen function and pass in the string "You reached a checkpoint!" as an argument.

Congratulations! You have completed the platformer game project!*/


if (index === checkpoints.length - 1) {
        isCheckpointCollisionDetectionActive = false;
        showCheckpointScreen("You reached the final checkpoint!");
        movePlayer("ArrowRight", 0, false);
      } else if (player.position.x >= checkpoint.position.x && player.position.x <= checkpoint.position.x + 40) {
        showCheckpointScreen("You reached a checkpoint!")
      }