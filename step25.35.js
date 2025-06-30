/*Step 35
There is another way to write the forEach. Instead of using a block body () => {} for the callback, you can use an expression body () =>.

You will have to convert the if...else statements into an expression. Write the expression as a ternary and use a single assignment for the ternary.

Example Code
assignment = condition ? exprIfTrue : exprIfFalse
Convert the forEach callback to use an expression body and replace the statements with a ternary.*/



const getMode = (array) => {
  const counts = {};
  array.forEach(el => counts[el] = counts[el] ? counts[el] + 1 : 1);
  console.log(counts)
  return counts;
}