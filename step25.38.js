/*Step 38
There are a few edge cases to account for when calculating the mode of a dataset. First, if every value appears the same number of times, there is no mode.

To calculate this, you will use a Set. A Set is a data structure that only allows unique values. If you pass an array into the Set constructor, it will remove any duplicate values.

Start by creating an if statement. In the condition, create a Set with new Set() and pass it the Object.values() of your counts object. If the size property of this Set is equal to 1, that tells you every value appears the same number of times. In this case, return null from your function.*/



const getMode = (array) => {
  const counts = {};
  array.forEach(el => counts[el] = counts[el] ? counts[el] + 1 : 1);
  if (new Set(Object.values(counts)).size===1){
    return null
  }
}