/*Step 51
With two .map() calls and a .reduce() call, you're creating extra arrays and iterating more times than needed. You should move all of the logic into the .reduce() call to save time and memory.

Remove the differences, squaredDifferences, and sumSquaredDifferences variables (and their values). Declare a variance variable, and assign it the value of array.reduce(). For the callback, pass in your standard acc and el parameters, but leave the function body empty for now. Don't forget to set the initial value to 0.*/



const getVariance = (array) => {
  const mean = getMean(array);

  const variance=array.reduce((acc, el)=>{},0)
}