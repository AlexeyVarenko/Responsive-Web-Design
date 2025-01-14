/*Step 15
Right now, your id value is a lowercase string. But the final result should be a hyphenated string.

Start by chaining the split method to the titleInput.value to split the string into an array of words. For the separator, use a space character(" ").

To see the new result, click on the "Add New Task" button. Then add a title of WALK DOG and click on the "Add Task" button. Open up the console to see the result of ['walk', 'dog'].*/



id: titleInput.value.toLowerCase().split(" ")