/*Step 93
To reset the playlist to its original state, spread allSongs into an array and assign it to userData.songs.

Note: You should not use optional chaining for the userData.songs because the song will not be null or undefined at this point.*/



resetButton.addEventListener("click", () => {
    const userData.songs=[...allSongs];
  });