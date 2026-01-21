/*Step 92
Inside the body of the if statement, assign platform.position.y + player.height to the player's y position.

Then, assign gravity to the player's y velocity.

Now, when you start the game, you will be able to jump underneath the platform and collide with it.*/



if (platformDetectionRules.every(rule => rule)) {
      player.position.y=platform.position.y+player.height;
      player.velocity.y=gravity;
    };