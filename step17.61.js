/*Step 61
You also need to confirm the input is valid. Declare an invalidInputMatch variable, and assign it the result of calling your isInvalidInput function with currVal as the argument.*/


function getCaloriesFromInputs(list) {
    let calories = 0;
  
    for (const item of list) {
      const currVal = cleanInputString(item.value);
    const invalidInputMatch=isInvalidInput(currVal);
    }
  }