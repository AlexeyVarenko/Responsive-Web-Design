/*Step 16
Now that your id is an array of words, you can use the join method to turn the result back into a string. For the separator, use a hyphen(-).

To see the new result, click on the "Add New Task" button. Then add a title of WALK DOG and click on the "Add Task" button. Open up the console to see the result of "walk-dog".*/



id: titleInput.value.toLowerCase().split(" ").join("-")