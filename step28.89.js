/*Step 89
Below that boolean expression, add another boolean expression that checks if the player's x position is less than or equal to the sum of the platform's x position plus the platform's width minus one-third of the player's width. Use the division operator (/) to calculate a third of the player's width.*/


const platformDetectionRules = [
      player.position.x >= platform.position.x - player.width / 2,
      player.position.x <= platform.position.x + platform.width- player.width / 3 ,
    ];