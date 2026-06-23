/*Step 9
The formula to generate a random integer between two values is the following:

Example Code
Math.floor(Math.random() * (maximum - minimum) + minimum);
This will produce a result that is a integer between two values.

Create a variable called randomInt and assign it the result of generating a value between the min and max values.

Then, log the randomInt variable to see the result. Try refreshing the page to see different results.*/



  const randomInt=Math.floor(Math.random() * (max - min) + min);
  console.log(randomInt);