/*Step 53
The final step in calculating the variance is to divide the sum of the squared differences by the count of numbers.

Divide your .reduce() call by the length of the array (in your variance declaration). Then, return variance.*/



const getVariance = (array) => {
  const mean = getMean(array);
  const variance = array.reduce((acc, el) => {
    const difference = el - mean;
    const squared = difference ** 2;
    return acc + squared;
  }, 0)/array.length;
  return variance;
}
console.log(gerVariance([1,2,3,4,5]))