/*Step 13
The next step in calculating the mean is to divide the sum of numbers by the count of numbers in the list.

Declare a mean variable and assign it the value of sum divided by the length of array.*/



const getMean = (array) => {
  const sum = array.reduce((acc, el) => acc + el, 0);
  const mean=sum/array.length;
}