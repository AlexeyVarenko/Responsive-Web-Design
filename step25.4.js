/*Step 4
The value of an input element is always a string, even if the input type is number. You need to convert this array of strings into an array of numbers. To do this, you can use the .map() method.

Create a numbers variable and assign it the value of array.map(). Remember that .map() creates a new array, instead of mutating the original array.*/



const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers=array.map();
}