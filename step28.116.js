/*Step 116
Inside the condition, you want to first set the isCheckpointCollisionDetectionActive to false.

Then you will need to call the showCheckpointScreen function and pass in the string "You reached the final checkpoint!" as an argument.

Lastly, you will need to call the movePlayer function and pass in the string "ArrowRight" as the first argument, the number 0 as the second argument, and the boolean false as the third argument.*/



if (index === checkpoints.length - 1) {
        isCheckpointCollisionDetectionActive=false;
        showCheckpointScreen("You reached the final checkpoint!");
        movePlayer("ArrowRight",0,false);
      };