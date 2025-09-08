/*Step 89
Update the callback function to take match, fn, and args as parameters. It should implicitly return the result of checking whether spreadsheetFunctions has its own property of fn.

Remember to make fn lower case.

To check if a property on a given object exists or not, you can use the hasOwnProperty() method.

The hasOwnProperty() method returns true or false depending on if the property is found on the object or not.

Here is an example of how to use the hasOwnProperty() method:

Example Code
const developerObj = {
  name: 'John',
  age: 34,
}

developerObj.hasOwnProperty('name'); // true
developerObj.hasOwnProperty('salary'); // false*/


const applyFunction = str => {
  const noHigh = highPrecedence(str);
  const infix = /([\d.]+)([+-])([\d.]+)/;
  const str2 = infixEval(noHigh, infix);
  const functionCall = /([a-z0-9]*)\(([0-9., ]*)\)(?!.*\()/i;
  const toNumberList = args => args.split(",").map(parseFloat);
  const apply = (fn, args) => spreadsheetFunctions[fn.toLowerCase()](toNumberList(args));
  return str2.replace(functionCall, (match, fn, args) =>spreadsheetFunctions.hasOwnProperty(fn.toLowerCase()));
}