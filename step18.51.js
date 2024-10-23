/*Step 51
To get the index for the current song, you can use the indexOf() method. The indexOf() array method returns the first index at which a given element can be found in the array, or -1 if the element is not present.

Example Code
const animals = ["dog", "cat", "horse"];
animals.indexOf("cat") // 1
Inside your getCurrentSongIndex function, return userData?.songs.indexOf(). For the indexOf() argument, set it to userData?.currentSong.*/



const getCurrentSongIndex = () => {
    return userData?.songs.indexOf(userData?.currentSong);
   }