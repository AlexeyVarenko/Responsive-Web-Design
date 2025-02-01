/*Step 46
As you did in the deleteTask function, you need to find the index of the task to be edited.

Create a dataArrIndex variable. For its value, utilize the findIndex() method on taskData. Pass item as the parameter to its callback function and check if the id of item is equal to the id of the parentElement of buttonEl.*/



const editTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex(
       (item) => item.id === buttonEl.parentElement.id)
   }