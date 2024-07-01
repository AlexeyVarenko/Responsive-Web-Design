/*Step 63
The locations array contains two locations: the "town square" and the "store". Currently you are passing that entire array into the update function.

Pass in only the first element of the locations array by adding [0] at the end of the variable. For example: myFunction(arg[0]);.

This is called bracket notation. Values in an array are accessed by index. Indices are numerical values and start at 0 - this is called zero-based indexing. arg[0] would be the first element in the arg array.*/



function goTown() {
    update(locations[0]);
  }