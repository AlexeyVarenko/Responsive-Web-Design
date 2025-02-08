/*Step 56
Now that you have the myTaskArr array saved in localStorage correctly, you can retrieve it with getItem() by specifying the key you used to save the item.

Use the getItem() method to retrieve the myTaskArr array and assign it to the variable getTaskArr. Then, log the getTaskArr variable to the console to see the result.*/



const getTaskArr = localStorage.getItem("data");
console.log(getTaskArr);