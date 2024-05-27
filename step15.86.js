/*Step 86
Using done to track the number of rows that have been generated is functional, but you can actually clean up the logic a bit further.

Arrays have a special length property that allows you to see how many values, or elements, are in the array. You would access this property using syntax like myArray.length.

Update your condition to check if rows.length is less than or equal to count.*/



let done = 0;

while (rows.length <= count) {
  done++;
  rows.push(padRow(done, count));
}