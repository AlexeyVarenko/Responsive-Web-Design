/*Step 15
You can actually clean this logic up a bit. Using the implicit return of an arrow function, you can directly return the value of the .reduce() method divided by the length of the array, without having to assign any variables.

Update your getMean function as described above.*/






const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;