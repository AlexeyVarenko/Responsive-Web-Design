/*Step 44
The callback to .sort() should return a number. That number determines how to sort the elements a and b:

If the number is negative, sort a before b.
If the number is positive, sort b before a.
If the number is zero, do not change the order of a and b.
Keeping in mind that you want the numbers to be sorted in ascending order (smallest to largest), return a single subtraction calculation using a and b that will correctly sort the numbers with the above logic.*/



const sortedValues = inputValues.sort((a, b) => {
    return a-b
  });