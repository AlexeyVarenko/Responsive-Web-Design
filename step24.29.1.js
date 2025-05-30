/*Step 29
Inside your nested for loop, add a console.log() call to check the values of array, array[j], and array[minIndex] at each iteration. You can click the Sort button to see how your algorithm is traversing the array.

Then write an if statement that checks if the value at array[j] is smaller than the value at array[minIndex]. If it is, set minIndex to j.*/



const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      console.log(array, array[j], array[minIndex])
      if (array[j] < array [minIndex]){
        minIndex = j;
      }
    }
  }
}