/*Step 5
To see the updated shopping list, you will need to log the current shopping list and a short message to the console.

Since this message will be used repeatedly throughout the workshop, it is best to create a reusable function.

Create a function called getShoppingListMsg that takes an array as a parameter and returns the string "Current Shopping List: " followed by the contents of the provided array.

You can use template literals or string concatenation with the + operator to combine the string with the array passed to the function.*/



console.log("Grocery shopping list");

const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

shoppingList.push("Apples");

function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}