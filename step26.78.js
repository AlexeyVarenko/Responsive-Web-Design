/*Step 78
Your infixEval function will only evaluate the first multiplication or division operation, because regex isn't global. This means you'll want to use a recursive approach to evaluate the entire string.

If infixEval does not find any matches, it will return the str value as-is. Using a ternary expression, check if str2 is equal to str. If it is, return str, otherwise return the result of calling highPrecedence() on str2.*/



const highPrecedence = str => {
  const regex = /([\d.]+)([*\/])([\d.]+)/;
  const str2 = infixEval(str, regex);
  return str2===str?str:highPrecedence(str2)
}