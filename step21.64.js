/*Step 64
You've retrieved the task item(s) now, but they still don't reflect in the UI when the page loads. However, they appear when you add a new task.

You can check if there's a task inside taskData using the length of the array. Because 0 is a falsy value all you need for the condition is the array length.

Here is an example checking the length of an array:

Example Code
if (arr.length) {
  // do something
}
In that example, if arr has a length greater than 0, the code inside the if statement block will run. If arr has a length of 0, the code inside the if statement block will not run.

Check if there's a task inside taskData, then call the updateTaskContainer() inside the if statement block.*/



if (taskData.length) {
    updateTaskContainer()
  }