/*Step 48
Now update your innermost function in the addCharacters chain to implicitly return the result of calling charRange() with character1 and character2 as the arguments.*/


const evalFormula = (x, cells) => {
  const idToText = id => cells.find(cell => cell.id === id).value;
  const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;
  const rangeFromString = (num1, num2) => range(parseInt(num1), parseInt(num2));
  const elemValue = num => {
    const inner = character => {
      return idToText(character + num);
    }
    return inner;
  }
  const addCharacters = character1 => character2 => num =>charRange(character1, character2);
}