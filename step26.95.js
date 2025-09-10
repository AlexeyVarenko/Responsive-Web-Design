/*Step 95
You can quickly get all cells from your page by getting the #container element by its id and accessing the children property of the result. Pass that to your evalFormula() call as the second parameter.*/


const update = event => {
  const element = event.target;
  const value = element.value.replace(/\s/g, "");
  if (!value.includes(element.id) && value.startsWith('=')) {
     element.value = evalFormula(value.slice(1), document.getElementById("container").children)
  }
}