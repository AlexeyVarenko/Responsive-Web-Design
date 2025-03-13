/*Step 40
In the previous version of this function, you pushed the remainder of input divided by 2 to binaryArray. Then later you reversed and joined the entries into a binary number string.

But it would be easier to use string concatenation within the loop to build the binary string from right to left, so you won't need to reverse it later.

First, use the remainder operator (%) to set binary equal to the remainder of input divided by 2.*/



let binary= input%2;