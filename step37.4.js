/*Step 4
The next portion of the workshop is to review how to generate a random number between two values.

Start by adding another console.log() that logs the message "Now, generate a random number between two values." to the console.

Then, create a variable called min and assign it the value of 1 and create a variable called max and assign it the value of 100.

In the next step, you will generate a random number between these two values.*/


const botName = "MathBot";
const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;

console.log(greeting);

console.log("The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1.");

const randomNum = Math.random();
console.log(randomNum);
console.log("Now, generate a random number between two values.");
const min=1;
const max=100;