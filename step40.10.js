/*Step 10
It's time to test each of the functions. You can use any of the recipes for this, but this tutorial will start with recipe1.

Create two new variables: recipe1TotalIngredients and recipe1DifficultyLevel. Assign them the values by calling the corresponding function for each variable and passing in the appropriate recipe1 property.

Finally, log each variable to the console to see the results.*/



const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(recipe1TotalIngredients);

const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1DifficultyLevel);