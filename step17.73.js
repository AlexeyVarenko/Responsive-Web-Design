/*Step 73
Now declare a lunchCalories variable, and give it the value of calling getCaloriesFromInputs with your lunchNumberInputs.*/



function calculateCalories(e) {
    e.preventDefault();
    isError = false;
    
    const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]');
    const lunchNumberInputs = document.querySelectorAll('#lunch input[type=number]');
    const dinnerNumberInputs = document.querySelectorAll('#dinner input[type=number]');
    const snacksNumberInputs = document.querySelectorAll('#snacks input[type=number]');
    const exerciseNumberInputs = document.querySelectorAll('#exercise input[type=number]');
  
    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const lunchCalories=getCaloriesFromInputs(lunchNumberInputs);
  }