/*Step 45
Your next calculation is the range, which is the difference between the largest and smallest numbers in the list.

You previously learned about the global Math object. Math has a .min() method to get the smallest number from a series of numbers, and the .max() method to get the largest number. Here's an example that gets the smallest number from an array:

Example Code
const numbersArr = [2, 3, 1];

console.log(Math.min(...numbersArr));
// Expected output: 1
Declare a getRange function that takes the same array parameter you have been using. Using Math.min(), Math.max(), and the spread operator, return the difference between the largest and smallest numbers in the list.*/



const getRange=array=>Math.max(...array)-Math.min(...array)