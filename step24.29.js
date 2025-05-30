/*Step 28
A selection sort relies on tracking the index of the smallest value in the array. Declare a variable minIndex and set it to i - this ensures that if your current value is the smallest, it will be swapped with itself and not be moved. You will need to be able to reassign the value of minIndex as you iterate through the array.

Then, write another for loop, using j as the iterator. This loop needs to start at the index after i and iterate through the rest of the array.*/

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex=i
     for(let j=i+1; j<array.length; j++){
  }
}
}