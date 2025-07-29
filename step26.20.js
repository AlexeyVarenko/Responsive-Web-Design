*/*Step 20
Most spreadsheet programs include built-in functions for calculation.

Declare a sum function that takes a nums parameter, which will be an array of numbers. It should return the result of calling reduce on the array to sum all of the numbers.*/



const sum=nums=>nums.reduce((acc, el)=>acc+el, 0);