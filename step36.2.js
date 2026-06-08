/*Step 2
As you learned in a previous lesson, booleans are a data type with only true and false values.

A truthy value is a value that evaluates to true in a boolean context. Examples of truthy values are:

Non-empty strings
Non-zero numbers
The boolean true
And other values you'll meet later on.

You can use the Boolean() function to check the truthiness of a value. For example, Boolean("Hello World!") will return true because "Hello World!" is truthy.

Now, call Boolean(truthyOrFalsy) and log the result to the console.*/


const truthyOrFalsy = true;
console.log(Boolean(truthyOrFalsy))