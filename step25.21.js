/*Step 21
By default, the .sort() method converts the elements of an array into strings, then sorts them alphabetically. The .sort() method mutates the original array. This works well for strings, but not so well for numbers. For example, 10 comes before 2 when sorted as strings, but 2 comes before 10 when sorted as numbers.

To fix this, you can pass in a callback function to the .sort() method. This function takes two arguments, which represent the two elements being compared. The function should return a value less than 0 if the first element should come before the second element, a value greater than 0 if the first element should come after the second element, and 0 if the two elements should remain in their current positions.

To sort your numbers from smallest to largest, pass a callback function that takes parameters a and b, and returns the result of subtracting b from a.*/



const getMedian = (array) => {
  const sorted = array.sort((a,b)=>a-b);
}