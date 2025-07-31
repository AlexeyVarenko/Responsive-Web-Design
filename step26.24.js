/*Step 24
Now declare a length variable and assign it the length of your sorted array, and a middle variable that has the value of the length divided by 2, subtracted by 1.*/



const median = nums => {
  const sorted = nums.slice().sort((a, b) => a - b);
  const length= sorted.length;
  const middle=length/2-1;
}