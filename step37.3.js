/*Step 3
Now, it is time to generate a random number using the Math.random() method.

Create a variable called randomNum and assign it the value of the result of calling the Math.random() method.

Then, log the randomNum variable to the console.

Try adding a space in the code to re-run the bot and see different random numbers that are generated.*/


const botName = "MathBot";
const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;

console.log(greeting);

console.log("The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1.");
  const randomNum=Math.random();
  console.log(randomNum)
