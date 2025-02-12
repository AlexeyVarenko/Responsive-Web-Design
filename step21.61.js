/*Step 61
Now you should save the task items to local storage when the user adds, updates, or removes a task.

Inside the addOrUpdateTask function, use setItem() to save the tasks with a key of data, then pass the taskData array as its argument. Ensure that you stringify the taskData.

This would persist data once the user adds or updates tasks.*/


localStorage.setItem("data",JSON.stringify(taskData) )