/*Step 53
If you try to add a console.log(test) call below your padRow function, you would see an error. This is because test is defined in the local scope, meaning you cannot access it in the global scope (outside of the padRow function).

Returning a value from a function brings that value into the scope where the function was called. To bring your "Testing" value from the padRow function into the global scope, update your return statement to return only the test variable.*/


function padRow(name) {
    const test = "Testing";
    return test;
  }