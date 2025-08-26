/*Step 68
Now that you have your infix functions, you need a way to evaluate them. Declare an infixEval function which takes two parameters, str and regex. It should implicitly return the .replace() method of str, with regex and an empty callback as the arguments.*/



const infixEval=(str, regex)=>str.replace(regex, ()=>{});