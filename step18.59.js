/*Step 59
To get the previous song, subtract 1 from the currentSongIndex of userData?.songs and assign it to the constant previousSong. After that, call the playSong function and pass previousSong.id as an argument.*/



if (userData?.currentSong === null) return;
  else {
    const currentSongIndex = getCurrentSongIndex();
    const previousSong = userData?.songs[currentSongIndex-1];
    playSong(previousSong.id);
  }