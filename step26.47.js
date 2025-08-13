/*Step 47
Your inner functions can also return a function. Using the same arrow syntax, update your addCharacters function to return a third function which takes a num parameter.*/



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
  const addCharacters = character1 => character2 =>num=> {

  }
}