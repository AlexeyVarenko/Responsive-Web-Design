/*Step 7
A modal is an element that prevents all interaction with elements outside it until the modal has been dismissed.

The HTML dialog element has a showModal() method that can be used to display a modal dialog box on a web page.

Example Code
dialogElement.showModal();
Add an event listener to the closeTaskFormBtn variable and pass in a click event for the first argument and a callback function for the second argument.

For the callback function, call the showModal() method on the confirmCloseDialog element. This will display a modal with the Discard and Cancel buttons.*/



closeTaskFormBtn.addEventListener("click", () =>
    confirmCloseDialog.showModal()
  );