/*Step 33
Also, remove the existing code toggling the class hidden on taskForm inside the discardBtn event listener and call the reset function instead. That's because when you click the Discard button, everything in the input fields should go away.*/




discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
    reset()
  });