/*Step 51
At this point, editing a task won't reflect when you submit the task. To make the editing functional, go back to the if statement inside the addOrUpdateTask function. Create an else block and set taskData[dataArrIndex] to taskObj.*/



if (dataArrIndex === -1) {
    taskData.unshift(taskObj);
  } else {
    taskData[dataArrIndex] = taskObj;
  }