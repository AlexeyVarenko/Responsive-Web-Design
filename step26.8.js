/*Step 8
The Array() constructor has a .fill() method which can be used to fill an array with a value. You can use this to fill your array with the start value.

Chain the .fill() method to your Array() constructor, and pass it the start value.*/


const range = (start, end) => Array(end - start + 1).fill(start);