/*Step 63
If you add, update, or remove a task, it should reflect in the UI. However, that's not happening now because you have yet to retrieve the tasks. To do this, you need to modify your initial taskData to be an empty array.

Set taskData to the retrieval of data from local storage or an empty array. Make sure you parse the data coming with JSON.parse() because you saved it as a string.*/



const taskData = JSON.parse(localStorage.getItem("data")) || [];