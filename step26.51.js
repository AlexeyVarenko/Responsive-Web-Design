/*Step 51
You can pass a function reference as a callback parameter. A function reference is a function name without the parentheses. For example:

Example Code
const myFunc = (val) => `value: ${val}`;
const array = [1, 2, 3];
const newArray = array.map(myFunc);
The .map() method here will call the myFunc function, passing the same arguments that a .map() callback takes. The first argument is the value of the array at the current iteration, so newArray would be [value: 1, value: 2, value: 3].

Pass a reference to your elemValue function as the callback to your .map() method.*/



const evalFormula = (x, cells) => {
  const idToText = id => cells.find(cell => cell.id === id).value;
  const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;
  const rangeFromString = (num1, num2) => range(parseInt(num1), parseInt(num2));
  const elemValue = num => character => idToText(character + num);
  const addCharacters = character1 => character2 => num => charRange(character1, character2).map(elemValue);
}