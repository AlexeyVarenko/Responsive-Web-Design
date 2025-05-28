/*Step 24
Click your Sort button to see your bubble sort algorithm in action! If you open the console, you can watch the steps the algorithm takes.

Now that you have confirmed it works, remove your console.log() call.*/



const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      

      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}