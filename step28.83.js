/*Step 83
Add another boolean expression that checks if the sum of the player's y position, height, and y velocity is greater than or equal to the platform's y position.*/



  platforms.forEach((platform) => {
    const collisionDetectionRules = [
      player.position.y + player.height <= platform.position.y,
    player.position.y + player.height + player.velocity.y>=platform.position.y,
    ];
  });