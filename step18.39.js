/*Step 39
Add an else block to handle the song's current playback time. This allows you to resume the current song at the point where it was paused.

Within the else block, set the currentTime property of the audio object to the value stored in userData?.songCurrentTime.*/


if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
    audio.currentTime = 0;
  } else {
    audio.currentTime =userData?.songCurrentTime;
  }