/*Step 23
The next step is to create a new array that will be responsible for adding the player card information to the page.

Inside the setPlayerCards function, start by adding the map method to arr that will take in an empty callback function. Then, use the addition assignment += operator to assign the new array to playerCards.innerHTML.

Remember that the innerHTML property gets, or in this case, sets the HTML markup for the playerCards element.*/



playerCards.innerHTML+=arr.map(()=>{});
