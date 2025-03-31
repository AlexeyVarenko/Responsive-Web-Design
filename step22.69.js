/*Step 69
This effectively lowers the input by roughly half each time the decimalToBinary() function is called.

However, remember that the binary number string is built by calculating the remainder of input divided by 2 and concatenating that to the end.

After your call to decimalToBinary(), use the addition operator (+) to concatenate the remainder of input divided by 2 to the end of the string your recursive function returns. Also, wrap the operation in parentheses.*/



return decimalToBinary(Math.floor(input / 2))+ (input%2);