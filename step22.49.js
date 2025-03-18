/*Step 49
Then, since a() calls b(), the function b() is added to the call stack.

Next, add the following string to your callStack array: "b(): returns 'is ' + c()".

Remember that the call stack is a LIFO data structure, so the last function is added to the top or end of the stack, similar to pushing an element into an array.*/



const callStack = [
    'a(): returns "freeCodeCamp " + b()',
    "b(): returns 'is ' + c()"
  ];