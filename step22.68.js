/*Step 68
For the recursive case, add an else statement and return the result of calling decimalToBinary(). Pass in input divided by 2 rounded down with Math.floor() as the argument.*/



if (input === 0) {
    return "";
  } else{
    return decimalToBinary(Math.floor(input/2))
  }