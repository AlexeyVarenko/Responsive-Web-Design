/*Step 77
Inside the animate function, you will need to draw each of the platforms onto the canvas.

Add a forEach loop that iterates through the platforms array.

Inside the callback function, add a platform parameter and for the body of the function call the draw method on each platform.*/



platforms.forEach((platform)=>{
  platform.draw()
})