/*Step 73
Now everything should work as expected. And since you know that input will either be the numbers 0 or 1 at this point, you can combine your two base cases and just return input as a string.

For a reliable way to convert a value into a string, even falsy values like null and undefined, you can use the String() function. For example:

Example Code
const num = 5;

console.log(String(num)); // "5"
console.log(String(null)); // "null"
Combine your if and else if statements into a single if statement checking if input is equal to 0 or 1. If it is, use the String() function to convert input into a string and return it.*/



if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }