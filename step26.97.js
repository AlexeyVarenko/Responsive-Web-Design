/*Step 97
Your spreadsheet is now functional. However, you don't have support for very many formulas.

Add an even property to your spreadsheetFunctions. It should take a nums parameter, and return the result of filtering the nums array to only include even numbers. Use a reference to your isEven function to help.*/


const spreadsheetFunctions = {
  sum,
  average,
  median,
  even: nums=>nums.filter(isEven)

}