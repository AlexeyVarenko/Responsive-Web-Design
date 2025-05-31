/*Step 30
After your nested for loop, you've found the smallest value. You need to swap it with your current value.

Like you did in your bubble sort, use a temp variable to extract the value at array[i], then swap the values at array[i] and array[minIndex].*/



const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      console.log(array, array[j], array[minIndex]);
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    const temp= array[i];
    array[i]=array[minIndex];
    array[minIndex]=temp;

  }
}