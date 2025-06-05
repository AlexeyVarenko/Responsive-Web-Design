/*Step 39
After your while loop, you need to insert your current value. Remember that your loop ends when j is either out of the array bounds, or when the value at j is less than your current value.

Use the assignment operator to insert your current value into the correct index.*/



const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    const currValue = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > currValue) {
      array[j + 1] = array[j];
      j--;
    }
    array[j+1]=currValue;
  }
}