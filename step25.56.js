/*Step 56
To calculate a root exponent, such as  x−−√n
 , you can use an inverted exponent  x1/n
 . JavaScript has a built-in Math.pow() function that can be used to calculate exponents.

Here is the basic syntax for the Math.pow() function:

Example Code
Math.pow(base, exponent);
Here is an example of how to calculate the square root of 4:

Example Code
const base = 4;
const exponent = 0.5;
// returns 2
Math.pow(base, exponent);
Declare a standardDeviation variable, and use the Math.pow() function to assign it the value of  variance1/2
 .*/


 const getStandardDeviation = (array) => {
  const variance = getVariance(array);
  const standardDeviation=Math.pow(variance, (1/2));
}