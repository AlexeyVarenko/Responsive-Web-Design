/*Step 33
Now if you enter in the number 6 and click the Convert button, you'll see the following output:

Example Code
Inputs:  [ 6, 3, 1 ]
Quotients:  [ 3, 1, 0 ]
Remainders:  [ 0, 1, 1 ]
Notice that the remainders array is the binary representation of the number 6, but in reverse order.

Use the .reverse() method to reverse the order of the remainders array, and .join() with an empty string as a separator to join the elements into a binary number string. Then, set result.innerText equal to the binary number string.*/



result.innerText=remainders.reverse().join("")