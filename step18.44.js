/*Step 44
Add an else block. Inside the else block, call the playSong function with the id of the currently playing song as an argument.

This ensures that the currently playing song will continue to play when the play button is clicked.*/



if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    playSong(userData?.currentSong.id);
  }