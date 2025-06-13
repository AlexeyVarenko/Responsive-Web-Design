/*Step 7
Much like the .map() method, the .filter() method takes a callback function. The callback function takes the current element as its first argument.

Example Code
array.filter(el => {

})
The callback function needs to return a Boolean value, which indicates whether the element should be included in the new array. In this case, you want to return true if the element is not NaN (not a number).

However, you cannot check for equality here, because NaN is not equal to itself. Instead, you can use the isNaN() method, which returns true if the argument is NaN.

Add a callback function to your .filter() method with el as its parameter, and use an implicit return to return true if the element is NOT NaN.*/



const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el));
  const filtered = numbers.filter(el=>!isNaN(el));
}