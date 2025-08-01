/*Step 26
Object properties consist of key/value pairs. You can use shorthand property names when declaring an object literal. When using the shorthand property name syntax, the name of the variable becomes the property key and its value the property value.

The following example declares a user object with the properties userId, firstName, and loggedIn.

Example Code
const userId = 1;
const firstName = "John";
const loggedIn = true;

const user = {
  userId,
  firstName,
  loggedIn,
};

console.log(user); // { userId: 1, firstName: 'John', loggedIn: true }
To keep track of all of your spreadsheet's functions, declare a spreadsheetFunctions object. Using the shorthand notation syntax, set sum, average, and median as properties on the spreadsheetFunctions object.*/



const spreadsheetFunctions={
  sum, 
  average,
  median,
}