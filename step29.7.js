/*Step 7
Now that you have the data you want, you can use it to populate the UI. But the fetched data contains an array of 26 authors, and if you add them all to the page at the same time, it could lead to poor performance.

Instead, you should add 8 authors at a time, and have a button to add 8 more until there's no more data to display.

Use let to create 2 variables named startingIndex and endingIndex, and assign them the number values 0 and 8, respectively. Also, create an authorDataArr variable with let and set it to an empty array.*/



let startingIndex=0;
let endingIndex=8;
let authorDataArr=[];