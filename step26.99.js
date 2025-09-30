/*Step 99
Add a has2 property which returns whether the nums array has 2 in the values, and an increment property which returns nums with every value incremented by one.*/



const spreadsheetFunctions = {
  sum,
  average,
  median,
  even: nums => nums.filter(isEven),
  firsttwo: nums => nums.slice(0, 2),
  lasttwo: nums => nums.slice(-2),
  has2: nums => nums.includes(2),
  increment: nums => nums.map(num=>num+1),

}