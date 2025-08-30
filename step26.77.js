/*Step 77
Now that you have a regular expression to match multiplication or division, you can evaluate that expression.

Declare a str2 variable and assign it the result of calling infixEval with str and regex as arguments.*/



const highPrecedence = str => {
  const regex = /([\d.]+)([*\/])([\d.]+)/;
  const str2=infixEval(str, regex);
}