/*Step 39
Recall that, each time the loop runs, input is the quotient of the previous value of input divided by 2, rounded down. Eventually, input is less than 1, and the loop stops running.

You can do this in a single step.

Inside your while loop, set input equal to the quotient of input divided by 2. Also, remember to use Math.floor() to round the quotient down.*/



input = Math.floor(input/2);