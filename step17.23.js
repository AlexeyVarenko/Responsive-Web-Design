/*Step 23
Regex can also take specific flags to alter the pattern matching behavior. Flags are added after the closing /. The g flag, which stands for "global", will tell the pattern to continue looking after it has found a match. Here is an example:

Example Code
const helloRegex = /hello/g;
Add the g flag to your regex pattern.*/


function cleanInputString(str) {
    const regex = /[+-\s]/g;
  }