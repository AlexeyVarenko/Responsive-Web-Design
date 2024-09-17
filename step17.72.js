/*Step 72
Now that you have your lists of elements, you can pass them to your getCaloriesFromInputs function to extract the calorie total.

Declare a breakfastCalories variable, and assign it the result of calling getCaloriesFromInputs with breakfastNumberInputs as the argument.*/



function calculateCalories(e) {
    e.preventDefault();
    isError = false;
  
    const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]');
    const lunchNumberInputs = document.querySelectorAll('#lunch input[type=number]');
    const dinnerNumberInputs = document.querySelectorAll('#dinner input[type=number]');
    const snacksNumberInputs = document.querySelectorAll('#snacks input[type=number]');
    const exerciseNumberInputs = document.querySelectorAll('#exercise input[type=number]');
    const breakfastCalories=getCaloriesFromInputs(breakfastNumberInputs);
  
  }