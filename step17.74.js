/*Step 74
Following this same pattern, declare variables for the number inputs in the #dinner, #snacks, and #exercise elements. Assign them the appropriate getCaloriesFromInputs calls.*/



function calculateCalories(e) {
    e.preventDefault();
    isError = false;
  
    const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]');
    const lunchNumberInputs = document.querySelectorAll('#lunch input[type=number]');
    const dinnerNumberInputs = document.querySelectorAll('#dinner input[type=number]');
    const snacksNumberInputs = document.querySelectorAll('#snacks input[type=number]');
    const exerciseNumberInputs = document.querySelectorAll('#exercise input[type=number]');
  
    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
     const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
     const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
     const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
  }