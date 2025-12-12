/*Step 38
To visualize the player on the screen, you need to draw it on the canvas.

Inside the startGame function, call the .draw() method of your player object.*/



const startGame = () => {
  canvas.style.display = "block";
  startScreen.style.display = "none";
  player.draw()
}