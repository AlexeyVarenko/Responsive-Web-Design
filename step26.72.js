/*Step 72
You have a slight bug. arg1 and arg2 are strings, not numbers. infixToFunction['+']("1", "2") would return 12, which is not mathematically correct.

Wrap each of your infixToFunction[operator] arguments in a parseFloat() call.*/



const infixEval = (str, regex) => str.replace(regex, (_match, arg1, operator, arg2) => infixToFunction[operator](parseFloat(arg1), parseFloat(arg2)));