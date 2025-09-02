/*Step 81
Now that you've parsed and evaluated the multiplication and division operators, you need to do the same with the addition and subtraction operators.

Declare an infix variable, and assign it a regular expression that matches a number (including decimal numbers) followed by a + or - operator followed by another number.*/



const applyFunction = str => {
  const noHigh = highPrecedence(str);
  const infix = /([\d.]+)([+-])([\d.]+)/
}