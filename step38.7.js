/*Step 7
Now it is time to add another fruit to the list.

Using the same array method as earlier, add the string "Grapes" to the end of the shoppingList array.

Then, add a console.log and call the getShoppingListMsg function with the shoppingList array as an argument inside console.log to see the updated list logged to the console.*/



console.log("Grocery shopping list");

const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

shoppingList.push("Apples");

function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}

console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList));