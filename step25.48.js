/*Step 48
The next step is to calculate how far each element is from the mean. Declare a differences variable, and assign it the value of array.map(). For the callback, return the value of el minus mean.*/



const getVariance = (array) => {
  const mean = getMean(array);
  const differences= array.map(el=> el-mean);
}