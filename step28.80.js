/*Step 80
Next, add an else if statement to check if the left key was pressed and if isCheckpointCollisionDetectionActive is true.

Inside that condition, add a forEach loop to iterate through the platforms array.

Inside the loop, use the addition assignment operator to add 5 to the platform's x position.*/



 if (keys.rightKey.pressed && isCheckpointCollisionDetectionActive) {
      platforms.forEach((platform) => {
        platform.position.x -= 5;
      });
    } else if (keys.leftKey.pressed && isCheckpointCollisionDetectionActive){
      platforms.forEach((platform) =>{
         platform.position.x += 5;
      })
    }