/*Step 105
Finally, to handle potential edge cases, add an empty string property (you will need to use quotes) which is a function that takes a single argument and returns that argument.

With that, your spreadsheet project is now complete. You are welcome to experiment with adding support for even more functions.*/



const spreadsheetFunctions = {
  "": args=>args,
  sum,
  average,
  median,
  even: nums => nums.filter(isEven),
  someeven: nums => nums.some(isEven),
  everyeven: nums => nums.every(isEven),
  firsttwo: nums => nums.slice(0, 2),
  lasttwo: nums => nums.slice(-2),
  has2: nums => nums.includes(2),
  increment: nums => nums.map(num => num + 1),
  random: ([x, y]) => Math.floor(Math.random() * y + x),
  range: nums => range(...nums),
  nodupes: nums => [...new Set(nums).values()]
}