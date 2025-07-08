/*Step 50
Next, you need to take the sum of the squared differences.

Declare a sumSquaredDifferences variable, and assign it the value of squaredDifferences.reduce(). For the callback, return the sum of acc and el. Remember to set the initial value to 0.*/



const getVariance = (array) => {
  const mean = getMean(array);
  const differences = array.map(
    el => el - mean
  );
  const squaredDifferences = differences.map(
    el => el ** 2
  );
  const sumSquaredDifferences=squaredDifferences.reduce((acc, el)=>acc+el,0)
}