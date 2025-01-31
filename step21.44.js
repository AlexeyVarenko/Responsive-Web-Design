/*Step 44
You need to remove the task from the DOM using remove() and from the taskData array using splice().

splice() is an array method that modifies arrays by removing, replacing, or adding elements at a specified index, while also returning the removed elements. It can take up to three arguments: the first one is the mandatory index at which to start, the second is the number of items to remove, and the third is an optional replacement element. Here's an example:

Example Code
const fruits = ["mango", "date", "cherry", "banana", "apple"];

// Remove date and cherry from the array starting at index 1
const removedFruits = fruits.splice(1, 2);

console.log(fruits); // [ 'mango', 'banana', 'apple' ]
console.log(removedFruits); // [ 'date', 'cherry' ]
Use the remove() method to remove the parentElement of the buttonEl from the DOM. Then use splice() to remove the task from the taskData array. Pass in dataArrIndex and 1 as the arguments of your splice().

dataArrIndex is the index to start and 1 is the number of items to remove.*/



const deleteTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex(
      (item) => item.id === buttonEl.parentElement.id
    );
    buttonEl.parentElement.remove();
    taskData.splice(dataArrIndex,1)
  }