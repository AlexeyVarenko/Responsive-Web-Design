/*Step 6
Before you move on, you should practice how to access properties from an object.

You can use either dot (.) or bracket ([]) notation to do this. Here's an example:

Example Code
const person = {
  name: "John",
  age: 30,
  job: "Software Engineer"
};

console.log(person.name); // John
console.log(person['age']);  // 30
Access the name property of recipe1, and assign it to the variable recipe1Name.

Next, access the cookingTime property of recipe2 and assign it to the variable recipe2CookingTime.

Finally, access the ingredients property of recipe3 and assign it to the variable recipe3Ingredients.

Make sure all the variables you created are logged to the console.*/


const recipes = [];

const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe2 = {
  name: "Chicken Curry",
  ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe3 = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe1Name = recipe1.name;
console.log(recipe1Name);

const recipe2CookingTime = recipe2.cookingTime;
console.log(recipe2CookingTime);

const recipe3Ingredients = recipe3.ingredients;
console.log(recipe3Ingredients);