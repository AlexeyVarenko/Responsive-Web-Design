/*Step 31
The second condition in this example checks if a.name > b.name. If so, the function returns 1, which sorts the first fruit after the second fruit.

Example Code
const fruits = [
  { name: "Apples", price: 0.99 },
  { name: "Blueberries", price: 1.49 },
  { name: "Grapes", price: 2.99 },
];

fruits.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }

  if (a.name > b.name) {
    return 1;
  }

  return 0;
});
Inside your callback function, add another if statement to check if a.title is greater than b.title. If so, return the number 1.*/


if (a.title > b.title) {
    return 1;
  }