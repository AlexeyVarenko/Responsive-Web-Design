/*Step 46
In your elemValue function, you explicitly declared a function called inner and returned it. However, because you are using arrow syntax, you can implicitly return a function. For example:

Example Code
const curry = soup => veggies => {};
curry is a function which takes a soup parameter and returns a function which takes a veggies parameter. Using this syntax, update your addCharacters function to return an empty function which takes a character2 parameter.*/



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
  const addCharacters = character1 =>character2=> {

  }
}