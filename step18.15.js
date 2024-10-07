/*Step 15
If the arrow function is returning a simple expression, you can omit the return keyword and the curly braces {}. This is called an implicit return.

Example Code
const multiplyTwoNumbers = (num1, num2) => num1 * num2;
If your arrow function has multiple lines of code in the function body, then you need to use the return keyword and the curly braces {}.

Example Code
const getTax = (price) => {
  const taxRate = 0.08;
  const tax = price * taxRate;
  return tax;
};
Refactor, or update, your addTwoNumbers function to remove the return keyword and the curly braces {}. Your addTwoNumbers function should instead use an implicit return.

Open up the console to make sure that you are still getting the correct output.*/


const addTwoNumbers = (num1, num2) => num1 + num2