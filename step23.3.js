/*Step 3
If the messageInput is empty, display an alert to the user with the message "Please enter a message.".

Then, exit the function execution.*/



checkMessageButton.addEventListener("click", () => {
    if(messageInput.value == "") {
      alert("Please enter a message.")
      return
    }
   });