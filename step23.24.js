/*Step 24
The tricky part about while loops is that, if you're not careful, they can run forever. This is called an infinite loop, and can cause your browser to crash.

To avoid infinite loops, you need to make sure that the condition for the while loop eventually becomes false. In this case, you want to make sure that the input variable eventually becomes 0.

Move the input = 0 statement into the body of the while loop. This will make it so that the loop will only run up to one time.*/



while (input > 0) {
    input = 0;

  }