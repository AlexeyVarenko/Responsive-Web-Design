/*Step 51
Your call stack is complete. As you can see, a() is at the bottom or beginning of the stack, which calls b() in the middle, which calls c() at the top or end. Once they're all in place, they begin to execute from top to bottom.

c() executes, returns the string "awesome!", and is popped off or removed from the top of the stack.

Remove your "c(): returns 'awesome!'" string from the top of the callStack array.*/



const callStack = [
    'a(): returns "freeCodeCamp " + b()',
    'b(): returns "is " + c()',
    
  ];