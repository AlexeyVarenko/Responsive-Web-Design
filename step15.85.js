/*Step 85
Your pyramid generator is still working. However, it could be possible to end up with an infinite loop again.

Because you are only checking if done is not equal to count, if done were to be larger than count your loop would go on forever.

Update your loop's condition to check if done is less than or equal to count.*/



let done = 0;

while (done <= count) {
  done++;
  rows.push(padRow(done, count));
}