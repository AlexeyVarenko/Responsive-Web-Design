/*Step 54
The second argument to the .replace() method does not have to be a string. You can instead pass a callback function to run more complex logic on the matched string.

The callback function takes a few parameters. The first is the matched string. Pass an empty callback function to your .replace() call, and give it a match parameter.*/




const evalFormula = (x, cells) => {
  const idToText = id => cells.find(cell => cell.id === id).value;
  const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;
  const rangeFromString = (num1, num2) => range(parseInt(num1), parseInt(num2));
  const elemValue = num => character => idToText(character + num);
  const addCharacters = character1 => character2 => num => charRange(character1, character2).map(elemValue(num));
  const rangeExpanded = x.replace(rangeRegex, (match)=>{
    
  });
}