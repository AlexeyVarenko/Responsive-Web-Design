/*Step 65
Remember that return ends the execution of a function. After your if block, you need to handle the logic for when the input is valid. Because your if statement returns a value, you do not need an else statement.

Use the addition assignment operator to add currVal to your calories total. You'll need to use the Number constructor to convert currVal to a number.

The Number constructor is a function that converts a value to a number. If the value cannot be converted, it returns NaN which stands for "Not a Number".

Here is an example:

Example Code
Number('10'); // returns the number 10
Number('abc'); // returns NaN*/


function getCaloriesFromInputs(list) {
    let calories = 0;
  
    for (const item of list) {
      const currVal = cleanInputString(item.value);
      const invalidInputMatch = isInvalidInput(currVal);
  
      if (invalidInputMatch) {
        alert(`Invalid Input: ${invalidInputMatch[0]}`);
        isError = true;
        return null;
      }
    calories += Number(currVal);
    }
  }