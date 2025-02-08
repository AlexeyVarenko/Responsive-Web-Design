/*Step 57
The item you retrieve is a string, as you saved it with JSON.stringify(). To view it in its original form before saving, you need to use JSON.parse().

Use getItem() to retrieve the myTaskArr array again. This time, wrap it inside JSON.parse(), assign it to the variable getTaskArrObj and log the getTaskArrObj to the console.

Check the console to see the difference between getTaskArr and getTaskArrObj.*/



const getTaskArrObj = JSON.parse(localStorage.getItem("data"));
console.log(getTaskArrObj)