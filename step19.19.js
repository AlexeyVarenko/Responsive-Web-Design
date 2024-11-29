/*Step 19
The split method takes in a parameter known as a separator. The separator is used to tell the computer where each split should occur.

Here is an example of using an empty string as a separator:

Example Code
// returns ["h", "e", "l", "l", "o"]
"hello".split(""); 
Other examples of separators can include a space " ", or a hyphen "-". If you don't provide a separator, the method will return an array with the original string as the only element.

Update your split method, to use an empty string as a separator. Open up the console again to see the result.*/



const exampleSentence = "selur pmaCedoCeerf".split("");
console.log(exampleSentence);