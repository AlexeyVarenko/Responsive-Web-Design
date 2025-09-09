/*Step 93
Now your update() function can actually evaluate formulas. Remember that you wrote the if condition to check that a function was called.

Inside your if statement, set the value of the element to be the result of your evalFormula() function. Do not pass any arguments yet.*/



const update = event => {
  const element = event.target;
  const value = element.value.replace(/\s/g, "");
  if (!value.includes(element.id) && value.startsWith('=')) {
    element.value = evalFormula();
  }
}