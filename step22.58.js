/*Step 58
A recursive function is a function that calls itself over and over. But you have to be careful because you can easily create an infinite loop. That's where the base case comes in. The base case is when the function stops calling itself, and it is a good idea to write it first.

Since your countdown() function will count down from a given number to zero, the base case is when the number parameter is equal to 0. Then it should return to break out of its recursive loop.

Use an if statement to check if number is equal to 0. If it is, use the return keyword to break out of the function.*/



if (number===0){
    return
  }