/*Step 38
Ranges are separated by a colon. After your two capture groups, your rangeRegex should look for a colon.*/




const evalFormula = (x, cells) => {
  const idToText = id => cells.find(cell => cell.id === id).value;
  const rangeRegex = /([A-J])([1-9][0-9]?):/;
}