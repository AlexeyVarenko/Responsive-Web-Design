/*Step 10
In an earlier project you learned about truthy and falsy values, which are values that evaluate to true or false. In JavaScript, some common falsy values you'll see are null, undefined, the number 0, and empty strings.

Rather than check if a value is equal to a falsy value, you can use the logical NOT operator (!) to check if the value itself is falsy. For example:

Example Code
const num = 0;

console.log(num === 0); // true
console.log(!num); // true
Update the condition in your if statement to use the logical NOT operator to check if numberInput.value is falsy.*/


if (!numberInput.value) {

}