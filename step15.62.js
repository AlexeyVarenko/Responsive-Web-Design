/*Step 62
Now it is time for a bit of math. Consider a three-row pyramid. If we want it centered, it would look something like:

··#··
·###·
#####
Empty spaces have been replaced with interpuncts, or middle dots, for readability. If you extrapolate the pattern, you can see that the spaces at the beginning and end of a row follow a pattern.

Update your blank space strings to be repeated rowCount - rowNumber times.

Open up the console to see the result.*/



function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(rowNumber) + " ".repeat(rowCount - rowNumber);
  }