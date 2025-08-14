/*Step 49
Use the same syntax as your addCharacters function to update your elemValue function. It should no longer declare inner, but should return the function implicitly.*/



const evalFormula = (x, cells) => {
  const idToText = id => cells.find(cell => cell.id === id).value;
  const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;
  const rangeFromString = (num1, num2) => range(parseInt(num1), parseInt(num2));
  const elemValue = num => character =>
      idToText(character + num);
   
  const addCharacters = character1 => character2 => num => charRange(character1, character2);
}