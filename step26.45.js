/*Step 45
The concept of returning a function within a function is called currying. This approach allows you to create a variable that holds a function to be called later, but with a reference to the parameters of the outer function call.

For example:

Example Code
const innerOne = elemValue(1);
const final = innerOne("A");
innerOne would be your inner function, with num set to 1, and final would have the value of the cell with the id of "A1". This is possible because functions have access to all variables declared at their creation. This is called closure.

You'll get some more practice with this. Declare a function called addCharacters which takes a character1 parameter.*/



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
  const addCharacters =(character1 )=>{
    
  }
}