/*Step 38
Before playing the song, you need to make sure it starts from the beginning. This can be achieved by the use of the currentTime property on the audio object.

Add an if statement to check whether the userData?.currentSong is falsy OR if userData?.currentSong.id is strictly not equal song.id. This condition will check if no current song is playing or if the current song is different from the one that is about to be played.

Inside if block, set the currentTime property of the audio object to 0.*/


if (userData?.currentSong === null || userData?.currentSong.id !== song.id){
    audio.currentTime=0;
  }