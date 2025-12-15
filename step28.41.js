/*Step 41
The requestAnimationFrame() web API, takes in a callback and is used to update the animation on the screen. The animate function will be responsible for updating the player's position and continually drawing it on the canvas.

Inside the animate function, call the requestAnimationFrame() API and pass animate as the argument.*/



const animate = () => {
  requestAnimationFrame(animate);
}