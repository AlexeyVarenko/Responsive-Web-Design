/*Step 39
Now you need to find the value that occurs with the highest frequency. You'll use the Object.keys() method for this.

Start by declaring a highest variable, and assigning it the value of the counts object's Object.keys() method.*/



const getMode = (array) => {
  const counts = {};
  array.forEach((el) => {
    counts[el] = (counts[el] || 0) + 1;
  })
  if (new Set(Object.values(counts)).size === 1) {
    return null;
  }
  const highest = Object.keys(counts);
}