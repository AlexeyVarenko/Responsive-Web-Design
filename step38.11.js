/*Step 11
In earlier steps, you reviewed how to add an item to the end of the array using the push method.

But the push method accepts multiple arguments, so you can add multiple items to the end of the array like this:

Example Code
array.push(item1, item2, item3);
In this step, use the push method to add the strings "Popcorn", "Beef Jerky", "Potato Chips" to the shoppingList array.

The order is important, so make sure to add the items in the order they are listed.*/



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

console.log("It looks like we need to get some cooking oil.");

shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips")