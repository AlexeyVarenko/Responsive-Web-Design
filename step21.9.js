/*Step 9
If the user clicks the Discard button, you want to close the modal showing the Cancel and Discard buttons, then hide the form modal.

Add a click event listener to discardBtn, then use the close() method on the confirmCloseDialog variable. Also, use classList to toggle the class hidden on taskForm so the form modal will close too.*/



discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close()
    taskForm.classList.toggle("hidden")
  });