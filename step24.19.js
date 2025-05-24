/*Step 19
For debugging purposes, add a console.log() call in your inner loop. Pass it the arguments array, array[j], and array[j+1].*/



const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      console.log(array, array[j], array[j+1]);
    }
  }
}