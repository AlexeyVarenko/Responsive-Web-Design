/*Step 53
Now add formInputValuesUpdated as the second mandatory condition in the if statement using the AND operator.

This way, the Cancel and Discard buttons in the modal won't be displayed to the user if they haven't made any changes to the input fields while attempting to edit a task.*/



if (formInputsContainValues && formInputValuesUpdated) {
    confirmCloseDialog.showModal();
  } else {
    reset();
  } 
  addOrUpdateTaskBtn.innerText = "Add Task"