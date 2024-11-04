/*Step 74
The setPlayButtonAccessibleText function will set the aria-label attribute to the current song, or to the first song in the playlist. And if the playlist is empty, it sets the aria-label to "Play".

Use the setAttribute method on the playButton element to set an attribute named "aria-label". Using a ternary, set the attribute value to Play ${song.title} or "Play" if song?.title is not available.

Don't forget you need string interpolation here, so you need to use backticks.*/



const setPlayButtonAccessibleText = () => {
    const song = userData?.currentSong || userData?.songs[0];
    playButton.setAttribute(
      "aria-label", 
      song?.title ? `Play ${song.title}` : "Play"
    )
  };