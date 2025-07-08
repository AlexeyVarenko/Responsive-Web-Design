/*Step 49
The next step is to square each of the differences. To square a value, you can use the ** operator. For example, 3 ** 2 would return 9.

Declare a squaredDifferences variable, and assign it the value of differences.map(). For the callback, return the value of el squared.*/



const getVariance = (array) => {
  const mean = getMean(array);
  const differences = array.map(
    el => el - mean
  );
 const squaredDifferences=differences.map(el=>el**2);
}