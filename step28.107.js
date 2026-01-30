/*Step 107
Set the checkpointMessage's textContent property to the msg parameter.*/



const showCheckpointScreen = (msg) => {
  checkpointScreen.style.display = "block";
  checkpointMessage.textContent=msg;
};