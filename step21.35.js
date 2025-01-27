/*Step 35
Create an if statement to check if formInputsContainValues is true. If formInputsContainValues is true, indicating that there are changes, use the showModal() method on confirmCloseDialog. Otherwise, if there are no changes, call the reset() function to clear the input fields and hide the form modal.*/



confirmCloseDialog.showModal();
if (formInputsContainValues){
  confirmCloseDialog.showModal()
} else{
  reset()
}