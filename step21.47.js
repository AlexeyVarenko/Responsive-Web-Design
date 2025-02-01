/*Step 47
Use square bracket notation to retrieve the task to be edited from the taskData array using the dataArrIndex. Then, assign it to the currentTask object to keep track of it.*/



const editTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex((item) => item.id === buttonEl.parentElement.id);
    
    currentTask=taskData[dataArrIndex];
  }