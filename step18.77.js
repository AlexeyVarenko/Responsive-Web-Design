/*Step 77
In earlier steps, you learned how to work with the sort() method to sort the songs in alphabetical order. Another use case for the callback function is to randomize an array.

One way to randomize an array of items would be to subtract 0.5 from Math.random() which produces random values that are either positive or negative. This makes the comparison result a mix of positive and negative values, leading to a random ordering of elements.

Example Code
const names = ["Tom", "Jessica", "Quincy", "Naomi"];
names.sort(() => Math.random() - 0.5);
Use the sort() method on the userData?.songs array. Pass a callback to the method, and return the result of Math.random() - 0.5.*/



const shuffle = () => {
    userData?.songs.sort(() => Math.random() - 0.5);
  };