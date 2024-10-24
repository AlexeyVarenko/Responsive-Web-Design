/*Step 54
Add an else block to the if statement. Inside the else block, call the getCurrentSongIndex() function and assign it to a constant named currentSongIndex.*/



if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
   const currentSongIndex=getCurrentSongIndex();
  }