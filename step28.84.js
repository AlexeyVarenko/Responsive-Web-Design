/*Step 84
Below that boolean expression, add another boolean expression that checks if the player's x position is greater than or equal to the platform's x position minus half of the player's width. Use the division operator (/) to calculate half of the player's width.*/




platforms.forEach((platform) => {
    const collisionDetectionRules = [
      player.position.y + player.height <= platform.position.y,
      player.position.y + player.height + player.velocity.y >= platform.position.y,
      player.position.x >= platform.position.x-player.width/2,
    ];
  });