/*Step 55
Next, you will need to retrieve the next song in the playlist. For that, you will need to get the index of the current song and then add 1 to it.

Create a constant called nextSong and assign userData?.songs[currentSongIndex + 1] to it.

Lastly, call the playSong function and pass in nextSong.id as the argument.*/



if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    const currentSongIndex = getCurrentSongIndex();
    const nextSong = userData?.songs[currentSongIndex + 1];
    playSong(nextSong.id)
  }