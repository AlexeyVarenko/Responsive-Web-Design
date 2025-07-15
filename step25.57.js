/*Step 57
The Math object has a .sqrt() method specifically for finding the square root of a number.

Change your standardDeviation variable to use this method instead of Math.pow().*/



const getStandardDeviation = (array) => {
  const variance = getVariance(array);
  const standardDeviation = Math.sqrt(variance);
  return standardDeviation;
}