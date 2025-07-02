/*Step 40
Now you need to sort the values properly. Chain the .sort() method to your Object.keys() call.

For the callback, you'll need to use the counts object to compare the values of each key. You can use the a and b parameters to access the keys. Then, return the value of counts[b] minus the value of counts[a].

Finally, access the first element in the array using bracket notation to complete your highest variable.*/



const getMode = (array) => {
  const counts = {};
  array.forEach((el) => {
    counts[el] = (counts[el] || 0) + 1;
  })
  if (new Set(Object.values(counts)).size === 1) {
    return null;
  }
  const highest = Object.keys(counts).sort((a,b)=>counts[b]-counts[a])[0];
}