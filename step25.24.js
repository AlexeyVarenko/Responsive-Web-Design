/*Step 24
To find the median of an even list of numbers, you need to find the two middle numbers and calculate the mean of those numbers.

Here is how to find the two middle numbers of an even list of items:

Example Code
// first middle number
arr[arr.length / 2];
// second middle number
arr[(arr.length / 2) - 1];
To find the median, you can use the getMean function which adds the middle numbers and divides the sum by 2.

Example Code
const numbers = [1, 2, 3, 4];
const firstMiddleNumber = numbers[numbers.length / 2];
const secondMiddleNumber = numbers[(numbers.length / 2) - 1];
// result is 2.5
getMean([firstMiddleNumber, secondMiddleNumber]);
Create an evenListMedian variable and assign it the result of finding the median of the testArr2.

Then, log the evenListMedian variable to the console.*/



const testArr1 = [1, 2, 3, 4, 5];
const testArr2 = [1, 2, 3, 4, 5, 6];
const isEven = testArr2.length % 2 === 0;
console.log(isEven);
const oddListMedian = testArr1[Math.floor(testArr1.length / 2)];
console.log(oddListMedian);

const firstMiddleNumber=testArr2[testArr2.length/2];
const secondMiddleNumber=testArr2[(testArr2.length/2)-1];

const evenListMedian=getMean([firstMiddleNumber, secondMiddleNumber]);
console.log(evenListMedian);