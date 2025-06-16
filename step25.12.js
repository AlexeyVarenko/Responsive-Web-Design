/*Step 12
The .reduce() method takes a second argument that is used as the initial value of the accumulator. Without a second argument, the .reduce() method uses the first element of the array as the accumulator, which can lead to unexpected results.

To be safe, it's best to set an initial value. Here is an example of setting the initial value to an empty string:

Example Code
array.reduce((acc, el) => acc + el.toLowerCase(), "");
Set the initial value of the accumulator to 0.*/



const getMean = (array) => {
  const sum = array.reduce((acc, el) => acc + el, 0);
}