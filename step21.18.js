/*Step 18
To make the id more unique, add another hyphen and use Date.now().

Date.now() returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.

Example Code
console.log(Date.now()); // 1628586800000
To see the new result, click on the "Add New Task" button. Then add a title of WALK DOG and click on the "Add Task" button. Open up the console to see the result.*/



id: `${titleInput.value.toLowerCase().split(' ').join('-')}-${Date.now()}`,  