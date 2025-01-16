/*Step 17
There is one last thing you will need to do to make this id unique.

But first, place the entire value below inside an embedded expression ${}.

Example Code
titleInput.value.toLowerCase().split(" ").join("-")
Then wrap that value in template strings.

In the next step, you will add a unique number to the end of the id value to make it truly unique.*/



id:`${titleInput.value.toLowerCase().split(" ").join("-")}`