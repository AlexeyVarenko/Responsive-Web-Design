/*Step 82
While asynchronous, or async, code can be difficult to understand at first, it has many advantages. One of the most important is that it allows you to write non-blocking code.

For example, imagine you're baking a cake, and you put the cake in the oven and set a timer. You don't have to sit in front of the oven waiting the entire time – you can wash dishes, read a book, or do anything else while you wait for the timer to go off.

Async code works in a similar way. You can start an async operation and other parts of your code will still work while that operation is running.

You'll learn more about async code in future projects, but the setTimeout() function is a good introduction.

Add a 1500 millisecond delay before the text "Camp" is logged to the console.*/



setTimeout(() => {
    console.log("Camp");
    }, 1500);