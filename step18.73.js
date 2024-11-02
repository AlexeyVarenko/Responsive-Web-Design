/*Step 73
You need to get the currently playing song or the first song in the playlist. To do that, create a song constant and use the OR operator (||) to set it to the current song of userData, or the first song in the userData?.songs array.

Don't forget to use optional chaining.*/



const setPlayButtonAccessibleText = () => {
    const song = userData?.currentSong||userData?.songs[0];
  };