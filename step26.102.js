/*Step 102
Create a random property. This property should use the first two numbers from an array to generate a random whole number. The range for this number starts at the first number (inclusive) of the two and ends just before the sum of these two numbers. Use the Math.floor() and Math.random() methods for the calculation.*/



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
  random: ([x,y])=>Math.floor(Math.random()*y+x),
}