/*Step 39
After your rangeRegex finds the :, it needs to look for the same letter and number pattern as it did before.

Copy your two existing capture groups and paste them after the colon.*/



const evalFormula = (x, cells) => {
  const idToText = id => cells.find(cell => cell.id === id).value;
  const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/;
}