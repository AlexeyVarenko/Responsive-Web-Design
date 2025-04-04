/*Step 77
Now your showAnimation() function is set up. But if you look at your checkUserInput() function, you'll notice that it is calling parseInt() to convert numberInput.value into a number several times.

This is generally a poor practice, for reasons like performance concerns or even just the fact that you'd have to change your logic in multiple places to update the parseInt() call.

To fix this, create a new variable to store the converted number. Then you only have to convert the number once and can use it throughout the function.

Create a new variable called inputInt and assign it the number converted from numberInput.value.*/



const inputInt=parseInt(numberInput.value);