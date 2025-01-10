/*Step 11
You will need to determine whether the task being added to the taskData array already exists or not. If the task does not exist, you will add it to the array. If it does exist, you will update it. To accomplish this, you can use the findIndex() method.

The findIndex() array method finds and returns the index of the first element in an array that meets the criteria specified by a provided testing callback function. If no such element is found, the method returns -1. The callback should return a truthy value to indicate a matching element has been found, and a falsy value otherwise.

Here's an example:

Example Code
const numbers = [3, 1, 5, 6];
const firstNumLargerThanThree = numbers.findIndex((num) => num > 3);

console.log(firstNumLargerThanThree); // prints index 2
Use const to declare a variable called dataArrIndex and assign it the value of taskData.findIndex(). For the findIndex() method, pass in an arrow function with item as the parameter.

Within the arrow function, check if the id property of item is strictly equal to the id property of currentTask.*/



const dataArrIndex=taskData.findIndex(item=> item.id === currentTask.id )