/*Step 4
To see how the loop inside printCharacters behaves, call it with the argument "hello".*/



function printCharacters(str) {
  for (const char of str) {
    console.log(char);
  }
}
printCharacters("hello");