/*Step 14
Just like regular functions, arrow functions can return values.

Here is an example of an arrow function returning the result of multiplying two numbers:

Example Code
const multiplyTwoNumbers = (num1, num2) => {
  return num1 * num2;
}

// Output: 12
console.log(multiplyTwoNumbers(3, 4)); 
Create a new variable called addTwoNumbers and assign it an arrow function. This arrow function should take two parameters called num1 and num2. Inside the body of the function, return the expression of adding num1 and num2.

Below the addTwoNumbers function, add a console statement. Inside that console statement, call the addTwoNumbers function and pass in the numbers 3 and 4 as arguments.

Open up the console to see the output.*/


const addTwoNumbers = (num1, num2) =>{
    return num1+num2;
  }
  console.log(addTwoNumbers(3, 4));