/*Step 103
Inside your condition, add a forEach loop to iterate through the checkpoints array. Use checkpoint as the parameter name for the callback function.

Inside the forEach callback, use the subtraction assignment operator to subtract 5 from the checkpoints's x position.*/



checkpoints.forEach((checkpoint)=>{
      checkpoint.position.x-=5;
    })