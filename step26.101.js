/*Step 101
Arrays have an .every() method. Like the .some() method, .every() accepts a callback function which should take an element of the array as the argument. The .every() method will return true if the callback function returns true for all elements in the array.

Here is an example of a .every() method call to check if all elements in the array are uppercase letters.

Example Code
const arr = ["A", "b", "C"];
arr.every(letter => letter === letter.toUpperCase());
Add an everyeven property to your spreadsheetFunctions - use the .every() method to check whether all array elements are even.*/



const spreadsheetFunctions = {
  sum,
  average,
  median,
  even: nums => nums.filter(isEven),
  someeven: nums => nums.some(isEven),
  everyeven: nums =>nums.every(isEven),
  firsttwo: nums => nums.slice(0, 2),
  lasttwo: nums => nums.slice(-2),
  has2: nums => nums.includes(2),
  increment: nums => nums.map(num => num + 1),
}