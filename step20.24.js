/*Step 24
arr contains a series of objects that each contains a name, position, number, isCaptain and nickname property. In order to access each of those properties inside the callback function, you will need to use object destructuring to unpack them into variables.

Here is an example:

Example Code
function myExampleFunction({ name, age, job, city }) {

}
Inside the parameter list in the callback function for the map method, unpack all 5 object properties from objects in arr using object destructuring.*/



playerCards.innerHTML += arr.map(({name, position, number, isCaptain, nickname}) => {

})