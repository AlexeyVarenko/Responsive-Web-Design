/*Step 90
Add another boolean expression that checks if the player's y position plus the player's height is greater than or equal to the platform's y position.

Below that, add another boolean expression that checks if the player's y position is less than or equal to the sum of the platform's y position plus the platform's height.*/



const platformDetectionRules = [
      player.position.x >= platform.position.x - player.width / 2,
      player.position.x <=
        platform.position.x + platform.width - player.width / 3,
      player.position.y + player.height >= platform.position.y,
      player.position.y <= platform.position.y + platform.height,
    ];