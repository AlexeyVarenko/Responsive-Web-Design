/*Step 9
Create a getDifficultyLevel function that takes a number indicating the cooking time as a parameter.

If the cooking time is less than or equal to 30, the function should return "easy". If it is less than or equal to 60, the function should return "medium". Otherwise, the function should return "hard". */




function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) {
    return "easy";
  } else if (cookingTime <= 60) {
    return "medium";
  } else {
    return "hard";
  }
}