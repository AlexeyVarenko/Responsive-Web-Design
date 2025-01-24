/*Step 31
Inside the reset function, set each value of titleInput, dateInput, descriptionInput to an empty string.

Also, use classList to toggle the class hidden on the taskForm and set currentTask to an empty object. That's because at this point, currentTask will be filled with the task the user might have added.*/



const reset = () => {
    titleInput.value= "";
    dateInput.value= "";
    descriptionInput.value= "";
    taskForm.classList.toggle("hidden");
    currentTask={};
  }