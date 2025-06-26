/*Step 30
To calculate the occurrence you can use the following approach:

Example Code
const numbersArr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4];
const counts = {};
numbersArr.forEach((el) => {
  if (counts[el]) {
    counts[el] += 1;
  } else {
    counts[el] = 1;
  }
});
Check if the current number is already in the counts object. If it is, increment it by 1. If it is not, set it to 1.

Resulting object. The keys are the numbers from the array and the values are the number of times each number appears in the list:

Example Code
{ 1: 3, 2: 3, 3: 3, 4: 3, 5: 2 }
For this step, start by declaring an empty counts object. Later on in the project, you will use this object to calculate the mode of the list of numbers.*/



const getMode = (array) => {
  const counts={};
}