/*Step 108
Create an if statement that checks if isCheckpointCollisionDetectionActive is true.

Inside the if statement, add a setTimeout() that takes in a callback function and a delay of 2000 milliseconds.

For the callback function, it should set the checkpointScreen style.display property to "none".*/


const showCheckpointScreen = (msg) => {
  checkpointScreen.style.display = "block";
  checkpointMessage.textContent = msg;
  if (isCheckpointCollisionDetectionActive){
    setTimeout(()=>{
      checkpointScreen.style.display="none"
    }, 2000)
  }

};