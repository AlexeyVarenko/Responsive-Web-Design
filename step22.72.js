/*Step 72
This mostly works – if you convert 0 into binary, 0 is displayed on the page. But now when you convert other numbers greater than 0, your binary number starts with a leading 0. For example, if you convert 1, the result is 01.

But if you think about it, 0 and 1 in base-10 always convert to 0 and 1 in base-2, respectively. So you can add another base case to handle when input is 1.

Add an else if statement to your function that checks if input is equal to 1. If it is, return the string "1".*/



if (input === 0) {
    return "0";
  } else if (input === 1){
    return "1";
  }
  
  else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  } 