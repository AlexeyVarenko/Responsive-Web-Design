/*Step 14
Finally, you need to return the value of mean.*/



const getMean = (array) => {
  const sum = array.reduce((acc, el) => acc + el, 0);
  const mean = sum / array.length;
  return mean;
}