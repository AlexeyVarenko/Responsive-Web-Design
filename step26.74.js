/*Step 74
In your highPrecedence function, declare a variable using const and assign it a regex that checks if the string passed to the str parameter matches the pattern of a number followed by a * or / operator followed by another number.

Your function should return a boolean value. Remember that you can use the test() method for this.*/



const highPrecedence = str => {
const regex = /([\d.]+)([*\/])([\d.]+)/;
return regex.test(str);
}