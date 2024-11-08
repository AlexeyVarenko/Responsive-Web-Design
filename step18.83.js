/*Step 83
You need to re-render the songs, highlight it and set the play button's accessible text since the song list will change.

Call the renderSongs function and pass in the userData?.songs array as an argument, this displays the modified playlist.

After that, call the highlightCurrentSong function to highlight the current song if there is any also and the setPlayButtonAccessibleText function to update the play button's accessible text.*/



const deleteSong = (id) => {
    userData.songs = userData?.songs.filter((song) => song.id !== id);
    renderSongs(userData?.songs);
    highlightCurrentSong();
    setPlayButtonAccessibleText();
  };