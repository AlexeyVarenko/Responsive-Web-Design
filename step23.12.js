/*Step 12
Arrays have a .some() method. Like the .filter() method, .some() accepts a callback function which should take an element of the array as the argument. The .some() method will return true if the callback function returns true for at least one element in the array.

Here is an example of a .some() method call to check if any element in the array is an uppercase letter.

Example Code
const arr = ["A", "b", "C"];
arr.some(letter => letter === letter.toUpperCase());
Use the .some() method to check if testing your msg on any of your denyList regular expressions returns true.

Use regex as the parameter for the callback function, for clarity.*/



const isSpam = (msg) =>denyList.some((regex)=>regex.test(msg));