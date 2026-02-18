/*Step 16
Now it's time to call the displayAuthors function. But again, you don't want to populate the page with all the authors at once. Instead, you can extract a portion of the authors with the startingIndex and endingIndex variables. The best method to do this is the .slice() array method.

First, remove the console log statement showing authorDataArr. Then, call the displayAuthors function with the authorDataArr array and .slice(). Use the startingIndex variable for the starting point and the endingIndex variable for the ending point.*/


 authorDataArr = data;
    displayAuthors(authorDataArr.slice(startingIndex, endingIndex))