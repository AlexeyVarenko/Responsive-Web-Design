/*Step 63
Browsers have a built in alert() function, which you can use to display a pop-up message to the user. The message to display is passed as the argument to the alert() function.

Using a template literal, in your if block, call the alert() function to tell the user "Invalid Input: ", followed by the first value in the invalidInputMatch array.*/



function getCaloriesFromInputs(list) {
    let calories = 0;
  
    for (const item of list) {
      const currVal = cleanInputString(item.value);
      const invalidInputMatch = isInvalidInput(currVal);
  
      if (invalidInputMatch) {
        alert(`Invalid Input: ${invalidInputMatch[0]}`)
        
      }
    }
  }