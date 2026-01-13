/*Step 82
Inside the callback function, create a new const variable called collisionDetectionRules and assign it an empty array.

Inside that array, add a boolean expression that checks whether the player's y position plus the player's height is less than or equal to the platform's y position.*/



platforms.forEach((platform) => {
    const collisionDetectionRules=[
      player.position.y+player.height<= platform.position.y
     ];
  });