/*Step 21
In the previous project, you learned how to work with the join method. This method takes an array of elements and joins them into a string. Similar to the split method, the join method also takes an optional separator. If you don't provide a separator, the default separator is a comma.

Here is an example of using the join method:

Example Code
// returns "1-2-3-4-5"
[1, 2, 3, 4, 5].join("-");
Chain the join method to your reverse method. Pass in an empty string as the separator.

Open up the console and see the output.*/



const exampleSentence = "selur pmaCedoCeerf".split("").reverse().join('');
console.log(exampleSentence);