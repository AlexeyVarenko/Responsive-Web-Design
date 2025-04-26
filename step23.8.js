/*Step 8
Strings have a .match() method, which accepts a regular expression as an argument and determines if the string matches that expression.

Update your isSpam() function to implicitly return the result of calling the .match() method on msg, passing helpRegex as the argument.

Then, try entering some messages on your page and see the result.*/



const isSpam = (msg) => msg.match(helpRegex);