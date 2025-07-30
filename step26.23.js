/*Step 23
Your next function will calculate the median value of an array of numbers. Start by declaring a median arrow function that takes a nums parameter.

In the function, declare a sorted variable and assign it the value of sorting a copy of the nums array.

You should use the slice() method for creating a shallow copy of the array.*/



const median =(nums)=>{
  const sorted = nums.slice().sort((a,b)=>a-b);
}