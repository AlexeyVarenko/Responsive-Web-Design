/*Step 41
Declare a rangeFromString arrow function that takes two parameters, num1 and num2. The function should implicitly return the result of calling range with num1 and num2 as arguments.

To be safe, parse num1 and num2 into integers as you pass them into range.*/



const evalFormula = (x, cells) => {
  const idToText = id => cells.find(cell => cell.id === id).value;
  const rangeRegex = /([A-J])([1-9][0-9]?):([A-J])([1-9][0-9]?)/gi;
  const rangeFromString=(num1, num2)=>range(parseInt(num1),parseInt(num2)) 
}