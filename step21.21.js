/*Step 21
Now that you have obtained the values from the input fields and generated an id, you want to add them to your taskData array to keep track of each task. However, you should only do this if the task is new. If the task already exists, you will set it up for editing. This is why you have the dataArrIndex variable, which provides the index of each task.

Create an if statement with the condition dataArrIndex === -1. Within the if statement, use the unshift() method to add the taskObj object to the beginning of the taskData array.

unshift() is an array method that is used to add one or more elements to the beginning of an array.

Example Code
const arr = [1, 2, 3];
arr.unshift(0);

// [0, 1, 2, 3]
console.log(arr); */



if (dataArrIndex === -1){
    taskData.unshift(taskObj);
  }