/*Step 7
As you learned in previous lessons, the Math.floor() method rounds the value down to the nearest whole integer.

Example Code
const price = 10.99;
Math.floor(price); // 10
Create a variable called numRoundedDown and assign it the result of rounding the floating point number 6.7 down to the nearest whole integer.

Then, log the numRoundedDown variable to the console to see the result.*/



const botName = "MathBot";
const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;

console.log(greeting);

console.log("The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1.");

const randomNum = Math.random();
console.log(randomNum);

console.log("Now, generate a random number between two values.");

const min = 1;
const max = 100;

const randomNum2 = Math.random() * (max - min) + min;
console.log(randomNum2);

console.log("The Math.floor() method rounds the value down to the nearest whole integer.");
const numRoundedDown = Math.floor(6.7);
console.log(numRoundedDown);