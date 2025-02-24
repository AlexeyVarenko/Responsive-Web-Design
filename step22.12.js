/*Step 12
Next, you need to check if the value returned by the parseInt() function is a number or not.

To do that, you can use the isNaN() function. This function takes in a string or number as an argument, and returns true if it evaluates to NaN. For example:

Example Code
isNaN("test"); // true
isNaN(2); // false
isNaN("3.5"); // false
Update the second condition in your if statement to use the isNaN() function to check if the value returned by parseInt() is NaN.

Also, as we mentioned in step 1 that we are considering only positive numbers, we should add a third condition in if statement to check whether the number is less than 0 (i.e negative numbers).

Example Code
 6 < 0; // false
-1 < 0; // true
-8 < 0; // true
 0 < 0; //false*/



 if (
    !numberInput.value ||
    isNaN(parseInt(numberInput.value)) ||
    parseInt(numberInput.value) < 0
  ) { }