/*Step 6
Now it is time to see the message logged to the console.

Add a console.log and call the getShoppingListMsg function with the shoppingList array as an argument inside console.log to see the message logged to the console.*/



console.log("Grocery shopping list");

const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

shoppingList.push("Apples");

function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}

console.log(getShoppingListMsg(shoppingList))