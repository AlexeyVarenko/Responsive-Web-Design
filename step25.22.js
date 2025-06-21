/*Step 22
In the next few steps, you'll learn how to determine if an array's length is even or odd, as well as how to find the median. You will then be able to apply what you learned to the getMedian function.

To check if a number is even or odd, you can use the modulus operator %. The modulus operator returns the remainder of the division of two numbers.

Here is an example checking if an array length is even or odd:

Example Code
// check if array length is even
arr.length % 2 === 0;

// check if array length is odd
arr.length % 2 === 1;
If the remainder is 0, the number is even. If the remainder is 1, the number is odd.

Create a variable called isEven. Then use the modulus operator to check if the length of the testArr2 array is even. Assign that expression to the isEven variable.

Below your isEven variable, log out the isEven variable to the console.

Open up the console to see the result.*/



const testArr1 = [1, 2, 3, 4, 5];
const testArr2 = [1, 2, 3, 4, 5, 6];
const isEven=testArr2.length%2===0;
console.log(isEven)