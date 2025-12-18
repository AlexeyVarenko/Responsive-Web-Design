/*Step 46
The next step is to add the logic for increasing or decreasing a player's velocity based on if they move to the left or right of the screen.

Inside the animate function, create an if statement where the condition checks if the right key was pressed and the player's x position is less than proportionalSize(400).

You need to use the proportionalSize function here to make sure the player's x position is always proportional to the screen size.*/





const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  if(keys.rightKey.pressed && player.position.x<proportionalSize(400)){
    
  }
}