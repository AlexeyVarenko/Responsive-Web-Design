/*Step 81
If you test your code, you'll notice that your console logs are not in the expected order. Instead of logging "free", pausing for a second before logging "Code", and finally logging "Camp", you'll see this:

Example Code
free
Camp
Code
This is because the setTimeout() function is asynchronous, meaning that it doesn't stop the execution of the rest of your code. All the code in the showAnimation() function runs line by line, but because setTimeout() is asynchronous, free and Camp are logged to the console immediately, and then Code is logged to the console after a one second delay.

One way to fix this is to use multiple setTimeout() functions. Use setTimeout() to log free to the console after half a second, or 500 milliseconds.*/



setTimeout(() => {
    console.log("free");
    }, 500);