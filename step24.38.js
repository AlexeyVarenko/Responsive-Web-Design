/*Step 38
On each iteration of your while loop, it is finding an element that is larger than your current value. You need to move that element to the right to make room for your current value.

Do so by assigning the value at the j index to the next index.*/



const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    const currValue = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > currValue) {
      array[j+1]=array[j]
      j--;
    }
  }
}