/*Step 82
Use the filter() method to remove the song object that matches the id parameter from the userData?.songs array.

The filter method keeps only the elements of an array that satisfy the callback function passed to it:

Example Code
const numArr = [1, 10, 8, 3, 4, 5]
const numsGreaterThanThree = numArr.filter((num) => num > 3);

console.log(numsGreaterThanThree) // Output: [10, 8, 4, 5]
Use the filter() method on userData?.songs. Pass in song as the parameter of the arrow function callback and use implicit return to check if song.id is strictly not equal to id. Assign all of that to the userData.songs.

Note: You should not use optional chaining when you assign the result of userData?.songs.filter to userData.songs because the allSongs array will not be undefined or null at that point. */


const deleteSong = (id) => {
    userData.songs=userData?.songs.filter((song)=>song.id !== id)
  };