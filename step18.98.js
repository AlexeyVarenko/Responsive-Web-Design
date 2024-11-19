/*Step 98
If there is no next song in the playlist, use the else block to reset the currentSong key of userData to null, and its songCurrentTime property to 0.*/



if (nextSongExists) {
    playNextSong();
  }else{
    userData.currentSong=null;
    userData.songCurrentTime=0;
  }