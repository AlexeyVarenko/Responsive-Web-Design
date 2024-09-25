/*Step 84
After your span element, add an hr element to create a horizontal line.

To keep your code clean and readable, you should add this on a new line in the template literal.*/



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
    const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
  
    if (isError) {
      return;
    }
  
    const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
    const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
    const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
    output.innerHTML = `
    <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
      <hr></hr>
    `;
  }