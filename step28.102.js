/*Step 102
Inside the animate function, you will need to draw each of the checkpoints onto the canvas.

Add a forEach loop that iterates through the checkpoints array.

Inside the callback function, add a checkpoint parameter and for the body of the function call the draw method on each checkpoint.*/



checkpoints.forEach((checkpoint)=>{checkpoint.draw()
})