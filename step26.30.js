/*Step 30
Because the change event is triggering on an input element, the element will have a value property that represents the current value of the input.

Assign the value property of element to a new variable called value, and use .replace() to remove all whitespace.*/



const update = event => {
  const element = event.target;
  const value=element.value.replace(/\s/g, "");
}