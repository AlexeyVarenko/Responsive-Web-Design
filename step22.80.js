/*Step 80
Before you start writing code for the animation, let's take a look at the function you'll use to add and remove elements from the DOM: setTimeout.

The setTimeout function takes two arguments: a callback function and a number representing the time in milliseconds to wait before executing the callback function.

For example, if you wanted to log "Hello, world!" to the console after 3 seconds, you would write:

Example Code
setTimeout(() => {
  console.log("Hello, world!");
}, 3000);
Use the setTimeout function to add a one second delay before the text "Code" is logged to the console. Then see what happens after you enter 5 into the number input and click the Convert button.*/



setTimeout(() => {
    console.log("Code");
}, 1000);