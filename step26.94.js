/*Step 94
The first argument for your evalFormula call needs to be the contents of the cell (which you stored in value). However, the contents start with an = character to trigger the function, so you need to pass the substring of value starting at index 1.*/



const update = event => {
  const element = event.target;
  const value = element.value.replace(/\s/g, "");
  if (!value.includes(element.id) && value.startsWith('=')) {
    element.value = evalFormula(value.slice(1));
  }
}