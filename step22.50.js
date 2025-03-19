/*Step 50
And since b() calls c(), the function c() is added to the call stack.

Add the following string to your callStack array: "c(): returns 'awesome!'".*/



const callStack = [
    'a(): returns "freeCodeCamp " + b()',
    'b(): returns "is " + c()',
    "c(): returns 'awesome!'"
  ];