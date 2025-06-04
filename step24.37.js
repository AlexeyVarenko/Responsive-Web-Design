/*Step 37
For this algorithm, you'll want to use a while loop. This loop needs two conditions:

First, it should not run beyond the beginning of the array (accessed with j).
Second, the loop should not run after it finds a value smaller than the current value.
To prevent an infinite loop, decrement j inside your loop.*/



const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    const currValue = array[i];
    let j = i - 1;
    while(j>=0 && array [j]> currValue){
      j--
    }

  }
}