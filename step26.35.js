/*Step 35
Your idToText function currently returns an input element. Update it to return the value of that input element.*/



const evalFormula = (x, cells) => {
  const idToText = id => cells.find(cell => cell.id === id).value;
}