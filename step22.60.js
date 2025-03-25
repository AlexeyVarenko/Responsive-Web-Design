/*Step 60
When writing the recursive case, you need to remember two things:

What is the base case?
What is the least amount of work you need to do to get closer to the base case?
Since the base case is when number is equal to 0, you need to call countdown() again while also lowering the value of number by 1.

Inside the else block, call countdown() and pass it number - 1 as an argument.*/



if (number === 0) {
    return;
  } else {
    countdown(number - 1);
  }