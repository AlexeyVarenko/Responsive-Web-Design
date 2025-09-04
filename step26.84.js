/*Step 84
Declare a toNumberList function that takes an args parameter and implicitly returns the result of splitting the args by commas. Then chain a map method to your split method and pass in parseFloat as the argument to the map method.*/



const applyFunction = str => {
  const noHigh = highPrecedence(str);
  const infix = /([\d.]+)([+-])([\d.]+)/;
  const str2 = infixEval(noHigh, infix);
  const functionCall = /([a-z0-9]*)\(([0-9., ]*)\)(?!.*\()/i;
  const toNumberList= args =>args.split(",").map(parseFloat);
}