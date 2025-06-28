/*Step 34
Inside the array.forEach() callback function, check if the current element is inside the counts object. If the element can be found, increment the value of counts[el] by 1. Otherwise, assign the number 1 to counts[el].

Change your return statement to return counts instead of array.

To test this, enter the numbers 4, 4, 2, 5 and click Calculate. You should see the following in the console:

Example Code
{ '2': 1, '4': 2, '5': 1 }*/



const getMode = (array) => {
  const counts = {};
  array.forEach(el => {
    if(counts[el]){
      counts[el]+=1;
      }else {
        counts[el]=1
    }
  })
  return counts;
}