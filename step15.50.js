/*Step 50Passed
Variables in JavaScript are available in a specific scope. In other words, where a variable is declared determines where in your code it can be used.

The first scope is the global scope. Variables that are declared outside of any "block" like a function or for loop are in the global scope. Your character, count, and rows variables are all in the global scope.

When a variable is in the global scope, a function can access it in its definition. Here is an example of a function using a global title variable:

const title = "Professor ";
function demo(name) {
  return title + name;
}
demo("Naomi")
This example would return "Professor Naomi". Update your padRow function to return the value of concatenating your character variable to the beginning of the name parameter.*/



function padRow(name) {
    return character+name;
  }