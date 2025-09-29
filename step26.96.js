/*Step 96
Unfortunately, that children property is returning a collection of elements, which is array-like but not an array. Wrap your second argument in Array.from() to convert it to an array.*/


const update = event => {
  const element = event.target;
  const value = element.value.replace(/\s/g, "");
  if (!value.includes(element.id) && value.startsWith('=')) {
    element.value = evalFormula(value.slice(1), Array.from(document.getElementById("container").children)); 
  }
}