/*Step 51
Variables can also be declared inside a function. These variables are considered to be in the local scope, or block scope. A variable declared inside a function can only be used inside that function. If you try to access it outside of the function, you will either get undefined or an error.

To see this in action, use const to declare a test variable in your padRow function. Initialise it with the value "Testing".

Then, below your function, try to log test to the console. You will see an error because it is not defined outside of the function's local scope. Remove that console.log to pass the tests and continue.*/



function padRow(name) {
    return character + name;
    const test ="Testing"
  }