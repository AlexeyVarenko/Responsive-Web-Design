/*Step 31
Finally, after your outer loop has finished, you need to return the array. Once you've done so, you should be able to see the Output change when you click the Sort button again.*/



const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      console.log(array, array[j], array[minIndex]);
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array

}