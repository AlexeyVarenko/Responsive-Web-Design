/*Step 8
If the user clicks the Cancel button, you want to cancel the process and close the modal so the user can continue editing. The HTML dialog element has a close() method that can be used to close a modal dialog box on a web page.

Example Code
dialogElement.close();
Add an event listener to the cancelBtn element and pass in a click event for the first argument and a callback function for the second argument.

For the callback function, call the close() method on the confirmCloseDialog element.*/



cancelBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
  });