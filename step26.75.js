/*Step 75
You should use console.log() to print the result of calling the highPrecedence function with the string "5*3".*/



const highPrecedence = str => {
  const regex = /([\d.]+)([*\/])([\d.]+)/;
  return regex.test(str);

}
console.log(highPrecedence("5*3"));