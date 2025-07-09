/*Step 52
Within your empty .reduce() callback, declare a variable difference and set it to the value of el minus mean. Then declare a squared variable, and set it to the value of difference to the power of 2. Finally, return the value of acc plus squared.*/



const getVariance = (array) => {
  const mean = getMean(array);
  const variance = array.reduce((acc, el) => {
    const difference= el-mean;
    const squared=difference**2;
    return acc+squared;

  }, 0) / array.length;
  return variance;
}