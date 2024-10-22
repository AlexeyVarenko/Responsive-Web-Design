/*Step 48
Use classList and remove() method to remove the .playing class from the playButton, since the song will be paused at this point.

To finally pause the song, use the pause() method on the audio variable. pause() is a method of the Web Audio API for pausing music files.*/



const pauseSong = () => {
    userData.songCurrentTime = audio.currentTime;
    playButton.classList.remove("playing");
    audio.pause();
  };