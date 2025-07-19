/*Step 7
Your array will need to be the size of the range. You can calculate this by finding the difference between end and start, and adding 1 to the result.

Pass this calculation as the argument for your Array() constructor.*/



const range = (start, end) => Array(end-start+1);