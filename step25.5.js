/*Step 5
The .map() method takes a callback function as its first argument. This callback function takes a few arguments, but the first one is the current element being processed. Here is an example:

Example Code
array.map(el => {

})
The callback function needs to return a value. In this case, you want to return the value of each element converted to a number. You can do this by using the Number() constructor, passing the element as an argument.

Add a callback function to your .map() method that converts each element to a number.*/



const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el=>Number(el))
}