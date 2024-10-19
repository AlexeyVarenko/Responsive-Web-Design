/*Step 43
Within the arrow function of the event listener, add an if to check if userData?.currentSong is falsey.

Inside the if block, call the playSong() function with the id of the first song in the userData?.songs array. This will ensure the first song in the playlist is played first.*/



if (!userData?.currentSong) {
    playSong(userData?.songs[0].id)
  }