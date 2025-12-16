/*Step 42
As the player moves through the game, you will need to clear the canvas before rendering the next frame of the animation.

You can use the clearRect() Web API to accomplish this. It takes in an x, y, width, and height arguments.

Below your requestAnimationFrame, call the clearRect() method on the ctx variable and pass in 0, 0, canvas.width, canvas.height as the arguments.*/




const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}