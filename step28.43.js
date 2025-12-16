/*Step 43
The next step is to update the player's position as it moves throughout the game.

Below your ctx.clearRect(), call the update() method on the player.*/



const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
}