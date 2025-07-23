/*Step 12
range() will return an array of numbers, which you need to convert back into characters. Chain the .map() method to your range() call.

Pass a callback function that takes code as the parameter and implicitly returns the value of passing code to the String.fromCharCode() method.*/



const charRange = (start, end) => range(start.charCodeAt(0), end.charCodeAt(0)).map(code=>String.fromCharCode(code));