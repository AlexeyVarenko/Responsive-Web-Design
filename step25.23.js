/*Step 23
To get the median of an array with an odd number of elements, you will need to find and return the middle number.

Here is how to find the middle number of an array with an odd number of elements:

Example Code
arr[Math.floor(arr.length / 2)];
Here is a longer example finding the middle number of an array with 5 elements:

Example Code
const numbers = [1, 2, 3, 4, 5];
const middleNumber = numbers[Math.floor(numbers.length / 2)];
console.log(middleNumber); // 3
The reason why you use Math.floor is because the result of dividing an odd number by 2 will be a decimal. Math.floor will round down to the nearest whole number.

Declare an oddListMedian variable and assign it the result of finding the middle number of the testArr1. Then log the oddListMedian variable to the console.

Open up the console to see the result.*/



const testArr1 = [1, 2, 3, 4, 5];
const testArr2 = [1, 2, 3, 4, 5, 6];
const isEven = testArr2.length % 2 === 0;
console.log(isEven);

const oddListMedian=testArr1[Math.floor(testArr1.length/2)];
console.log(oddListMedian)