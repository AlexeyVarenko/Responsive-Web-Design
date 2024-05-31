/*Step 103
Notice that like .push(), .unshift() returns the new length of the array after the element is added.

Arrays also have a .shift() method. This will remove the first element of the array, unlike .pop() which removes the last element. Here is an example of the .shift() method:

const numbers = [1, 2, 3];
numbers.shift();
The numbers array would be [2, 3].

Declare a shifted variable, assign it the result of calling .shift() on your numbers array, and print the variable.*/



const numbers = [1, 2, 3];

const shifted = numbers.shift();
const unshifted = numbers.unshift(5);
console.log(unshifted);
console.log(numbers);
console.log(shifted);