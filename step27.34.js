/*Step 34
You need to iterate through the buttons in your addToCartBtns variable. However, .getElementsByClassName() returns a Collection, which does not have a forEach method.

Use the spread operator on the addToCartBtns variable to convert it into an array. Then, use the forEach method to iterate through the array. Do not pass a callback function yet.*/



[...addToCartBtns].forEach();