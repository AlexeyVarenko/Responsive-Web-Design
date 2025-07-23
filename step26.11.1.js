/*Step 11
Your range function expects numbers, but your start and end values will be strings (specifically, they will be single characters such as A).

Convert your start and end values in your range() call to numbers by using the .charCodeAt() method on them, passing the number 0 as the argument to that method.*/



const charRange = (start, end) => range(start.charCodeAt(0), end.charCodeAt(0));