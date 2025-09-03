/*Step 82
Declare a str2 variable, and assign it the result of calling infixEval() with noHigh and infix as arguments.*/



const applyFunction = str => {
  const noHigh = highPrecedence(str);
  const infix = /([\d.]+)([+-])([\d.]+)/;
  const str2=infixEval(noHigh, infix);
}