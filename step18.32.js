/*Step 32
In the example, if a.name is equal to b.name, then the function returns 0. This means that nothing changes and the order of a and b remains the same.

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
Below your if statements, return the number 0 to leave the order of the two elements unchanged.*/



return 0;