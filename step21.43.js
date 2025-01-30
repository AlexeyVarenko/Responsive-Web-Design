/*Step 43
You need to find the index of the task you want to delete first.

Create a dataArrIndex variable and set its value using the findIndex() method on the taskData array. Pass item as the parameter for the arrow callback function, and within the callback, check if the id of item is equal to the id of the parentElement of buttonEl.*/



const deleteTask = (buttonEl) => {
    const dataArrIndex=taskData.findIndex((item)=>item.id === buttonEl.parentElement.id);
  }