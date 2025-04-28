/*Step 9
Instead of using the .match() method, you can use the .test() method of a regular expression to test if a string matches the pattern. Unlike .match(), .test() returns a boolean value indicating whether or not the string matches the pattern.

Update your isSpam() function to use the .test() method of helpRegex to test if msg is a match.

Then, try entering some messages on your page and see the result.*/


const isSpam = (msg) => helpRegex.test(msg);