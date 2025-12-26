/*Step 59
Now it is time to add the event listeners that will be responsible for calling the movePlayer function.

Start by adding an addEventListener to the global window object.

For the arguments, pass in the keydown event and an arrow function that uses the destructuring assignment to get the key property from the event object in the event listener parameter.

Here is the syntax for using the destructuring assignment in the parameter list of the arrow function:

Example Code
btn.addEventListener('click', ({ target }) => {
  console.log(target);
});*/



window.addEventListener('keydown', ({key}) => {
  
})