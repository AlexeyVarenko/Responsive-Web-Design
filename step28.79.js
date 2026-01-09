/*Step 79
Inside your condition, add a forEach loop to iterate through the platforms array. Inside the callback function use platform for the parameter.

Inside the loop, use the subtraction assignment operator to subtract 5 from the platform's x position.*/



if (keys.rightKey.pressed && isCheckpointCollisionDetectionActive) {
      platforms.forEach((platform)=>{
        platform.position.x -=5;
      })
    }