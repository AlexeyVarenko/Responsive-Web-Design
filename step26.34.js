/*Step 34
In your evalFormula, declare an idToText arrow function which takes an id parameter.

Your idToText function should return the result of calling .find() on the cells array with a callback function that takes an cell parameter and returns cell.id === id.

Both of your functions should use implicit returns.*/



const evalFormula = (x, cells) => {
  const idToText= (id)=>cells.find(cell=> cell.id===id)
}