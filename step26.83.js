/*Step 83
Declare a functionCall variable, and assign it this regular expression: /([a-z0-9]*)\(([0-9., ]*)\)(?!.*\()/i

This expression will look for function calls like sum(1, 4).*/



const applyFunction = str => {
  const noHigh = highPrecedence(str);
  const infix = /([\d.]+)([+-])([\d.]+)/;
  const str2 = infixEval(noHigh, infix);
  const functionCall=/([a-z0-9]*)\(([0-9., ]*)\)(?!.*\()/i;
}