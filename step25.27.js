/*Step 27
Now it is time to apply what you have learned to the getMedian function.

Inside your getMedian function, check if the length of sorted is even. If it is, find the middle two numbers, calculate their mean, and return the result. If the length of sorted is odd, return the middle number.

Make sure to work with the sorted array to find the middle numbers.

Also if you need help, refer back to the previous few steps to see how to find the median for an array.*/



const getMedian = (array) => {
  const sorted = array.toSorted((a, b) => a - b);
  const median =
    sorted.length % 2 === 0
      ? getMean([sorted[sorted.length / 2], sorted[sorted.length / 2 - 1]])
      : sorted[Math.floor(sorted.length / 2)];
  return median;
}