/*Step 29
To sort the songs in alphabetical order by title, you will need to pass in a compare callback function into your sort() method.

Here is an example of sorting a list of fruits by name.

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
In the next few steps, you will learn what each of those if statements is doing inside that callback function. But for now, add an empty callback function to your sort() method and use a and b for the parameter names.*/



userData?.songs.sort((a, b) => {});