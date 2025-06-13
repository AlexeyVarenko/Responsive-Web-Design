/*Step 8
Array methods can often be chained together to perform multiple operations at once. As an example:

Example Code
array.map().filter();
The .map() method is called on the array, and then the .filter() method is called on the result of the .map() method. This is called method chaining.

Following that example, remove your filtered variable, and chain your .filter() call to your .map() call above. Do not remove either of the callback functions.*/



const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
  }