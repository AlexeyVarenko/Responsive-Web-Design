/*Step 71
infixToFunction[operator] returns a function. Call that function directly, passing arg1 and arg2 as the arguments.*/



const infixEval = (str, regex) => str.replace(regex, (_match, arg1, operator, arg2) => infixToFunction[operator](arg1, arg2));