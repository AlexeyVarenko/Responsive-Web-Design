/*Step 48
The task to be edited is now in the currentTask object. Stage it for editing inside the input fields by setting the value of titleInput to currentTask.title, dateInput to currentTask.date, and descriptionInput to currentTask.description.*/



const editTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );

  currentTask = taskData[dataArrIndex];

titleInput.value=currentTask.title
dateInput.value=currentTask.date
descriptionInput.value=currentTask.description
  

}