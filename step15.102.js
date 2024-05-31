/*Step 102
The .unshift() method of an array allows you to add a value to the beginning of the array, unlike .push() which adds the value at the end of the array. Here is an example:

const numbers = [1, 2, 3];
numbers.unshift(5);
The numbers array would now be [5, 1, 2, 3].

Use const to declare an unshifted variable, and assign it the result of calling .unshift() on your numbers array. Pass 5 as the argument. Then print your unshifted variable.*/



const numbers = [1, 2, 3];
const unshifted=numbers.unshift(5);
console.log(unshifted);