/*Step 98
Add a firsttwo property which takes a nums parameter and returns the first two elements of the nums array in order. Then add a lasttwo property which returns the last two elements of the nums array in order.*/



const spreadsheetFunctions = {
  sum,
  average,
  median,
  even: nums => nums.filter(isEven),
  firsttwo: nums=> nums.slice(0, 2),
  lasttwo: nums=> nums.slice(-2),
}