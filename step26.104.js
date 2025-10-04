/*Step 104
The last function has a few approaches to implement, and you are free to choose whichever approach you would like.

Add a nodupes property which returns nums with all duplicate values removed. For example, [2, 1, 2, 5, 3, 2, 7] should return [2, 1, 5, 3, 7].*/


const spreadsheetFunctions = {
  
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