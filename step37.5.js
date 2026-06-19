/*Step 5
The formula to generate a random number between two values is the following:

Example Code
Math.random() * (maximum - minimum) + minimum;
This will produce a result that is a floating point number between two values.

Create a variable called randomNum2 and assign it the result of generating a value between the min and max values.

Then, log the randomNum2 variable to see the result. Try refreshing the page to see different results.*/



const randomNum2 = Math.random() * (max - min) + min;
console.log(randomNum2);