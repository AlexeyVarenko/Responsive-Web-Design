/*Step 37
After matching a cell letter successfully, your rangeRegex needs to match the cell number. Cell numbers in your sheet range from 1 to 99.

Add a capture group after your letter capture group. Your new capture group should match one or two digits – the first digit should be 1 through 9, and the second digit should be 0 through 9. The second digit should be optional.*/



const evalFormula = (x, cells) => {
  const idToText = id => cells.find(cell => cell.id === id).value;
  const rangeRegex = /([A-J])([1-9][0-9]?)/;
}