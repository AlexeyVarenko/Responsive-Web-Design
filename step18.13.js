/*Step 13
Just like regular functions, arrow functions can accept multiple parameters.

Here is an example of a named arrow function with one parameter:

Example Code
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};
If the function only has one parameter, you can omit the parentheses around the parameter list like this:

Example Code
const greet = name => {
  console.log(`Hello, ${name}!`);
};
Create a new named arrow function called printMessage that has one parameter called org. Inside the body of that function, add a console statement. Inside that console statement, add the template literal ${org} is awesome!.

Below your printMessage function, call the function and pass in the string "freeCodeCamp" as an argument.

Open up the console to see the result.*/



const printMessage = org => {
    console.log(`${org} is awesome!`);
  };
  printMessage("freeCodeCamp")