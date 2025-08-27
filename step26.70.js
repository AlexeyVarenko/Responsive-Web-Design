/*Step 70
The regex you will be passing to your infixEval function will match two numbers with an operator between them. The first number will be assigned to arg1 in the callback, the second to arg2, and the operator to operator.

Have your callback function implicitly return the operator property of your infixToFunction object. Remember that operator is a variable which holds the property name, not the actual property name.*/




const infixEval = (str, regex) => str.replace(regex, (_match, arg1, operator, arg2) => infixToFunction[operator]);