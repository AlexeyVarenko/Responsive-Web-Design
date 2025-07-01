/*Step 37
Returning the counts variable was only for testing purposes. Now that you are done testing, remove the return counts line from the getMode function.*/


const getMode = (array) => {
  const counts = {};
  array.forEach(el => counts[el] = counts[el] ? counts[el] + 1 : 1);
  console.log(counts);
}