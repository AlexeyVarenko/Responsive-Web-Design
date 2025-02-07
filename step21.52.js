/*Step 52
If the user attempts to edit a task but decides not to make any changes before closing the form, there is no need to display the modal with the Cancel and Discard buttons.

Inside the closeTaskFormBtn event listener, use const to create another variable named formInputValuesUpdated. Check if the user made changes while trying to edit a task by verifying that the titleInput value is not equal to currentTask.title, or the dateInput value is not equal to currentTask.date, or the descriptionInput value is not equal to currentTask.description.*/




const formInputValuesUpdated= titleInput.value !== currentTask.title || dateInput.value !== currentTask.date || descriptionInput.value !== currentTask.description;