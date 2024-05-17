/*Step 67
The pyramid looks a little funny now. Because you are starting the loop at 1 instead of 0, you do not need to add one to i when you pass it to padRow.

Update the first argument of your padRow call to be i.*/



for (let i = 1; i < count; i++) {
    rows.push(padRow(i, count));
  }