/*Step 43
Notice how the number 10 is placed at the beginning of the array. This is because the default behavior of .sort() is to convert the numbers values to strings, and sort them alphabetically. And "10" comes before "2" alphabetically.

To fix this, you can pass a callback function to the .sort() method. The callback function has two parameters - for yours, use a and b. The parameters of a and b represent the number values in the array that will be sorted.

Leave the function empty for now.*/



const sortedValues = inputValues.sort((a,b)=>{});