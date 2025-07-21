/*Step 9
Currently your range function returns an array with the correct length, but all of the values are the value of start. To fix this, chain the .map() method to your .fill() method.

Pass the .map() method a callback which takes element and index as parameters and returns the sum of those parameters.*/



const range = (start, end) => Array(end - start + 1).fill(start).map((element,index)=>element+index);