/*Step 85
Add one last boolean expression that checks if the player's x position is less than or equal to the sum of the platform's x position plus the platform's width minus one-third of the player's width. Use the division operator (/) to calculate a third of the player's width.*/



player.position.x<=platform.position.x+platform.width-player.width/3
  platforms.forEach((platform) => {
    const collisionDetectionRules = [
      player.position.y + player.height <= platform.position.y,
      player.position.y + player.height + player.velocity.y >= platform.position.y,
      player.position.x >= platform.position.x - player.width / 2,

    ];
  });