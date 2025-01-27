/*Step 36
You can enhance code readability and maintainability by refactoring the submit event listener into two separate functions. The first function can be used to add the input values to taskData, while the second function can be responsible for adding the tasks to the DOM.

Use arrow syntax to create an addOrUpdateTask function. Then move the dataArrIndex variable, the taskObj object, and the if statement into the addOrUpdateTask function.*/




const addOrUpdateTask=()=>{
    const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
    const taskObj = {
      id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
      title: titleInput.value,
      date: dateInput.value,
      description: descriptionInput.value,
    };
  
     if (dataArrIndex === -1) {
      taskData.unshift(taskObj);
    }
  }