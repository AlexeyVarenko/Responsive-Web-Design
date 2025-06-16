/*Step 11
Like the other methods, .reduce() takes a callback. This callback, however, takes at least two parameters. The first is the accumulator, and the second is the current element in the array. The return value for the callback becomes the value of the accumulator on the next iteration.

Example Code
array.reduce((acc, el) => {

});
For your sum variable, pass a callback to .reduce() that takes the accumulator and the current element as parameters. The callback should return the sum of the accumulator and the current element.*/



const getMean = (array) => {
  const sum = array.reduce((acc, el) => acc+el);
}