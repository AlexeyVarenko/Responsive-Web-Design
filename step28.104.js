/*Step 104
Inside your else if statement, add a forEach loop to iterate through the checkpoints array. Use checkpoint as the parameter name for the callback function.

Inside the forEach callback, use the addition assignment operator to add 5 to the checkpoints's x position.*/



 checkpoints.forEach((checkpoint)=>{
        checkpoint.position.x +=5;
      })