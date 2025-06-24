/*Step 26
The .sort() method mutates the original array - in other words, it modifies the order of the elements directly. This is generally considered bad practice, as it can result in unexpected side effects.

Instead, you should use the .toSorted() method, which creates a new array. Change your .sort() call to .toSorted(). Do not modify the callback function.*/



const getMedian = (array) => {
  const sorted = array.toSorted((a, b) => a - b);
}