/*Step 22
When your if condition is true, you need to swap the two elements, "bubbling" the larger element up toward the end of the array.

To do this, declare a temp variable and assign it the value of array[j]. Then assign array[j] the value of array[j + 1]. Finally, assign array[j + 1] the value of temp.*/



if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j]=array[j+1];
        array[j+1]=temp;
      }