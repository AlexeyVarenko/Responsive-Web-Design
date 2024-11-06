/*Step 79
You should also re-render the songs, pause the currently playing song, set the player display, and set the play button accessible text again.

Call the renderSongs function and pass in userData?.songs as an argument. Also, call the pauseSong, setPlayerDisplay, and setPlayButtonAccessibleText functions.*/



const shuffle = () => {
    userData?.songs.sort(() => Math.random() - 0.5);
    userData.currentSong = null;
    userData.songCurrentTime = 0;
    renderSongs(userData?.songs);
    pauseSong();
    setPlayerDisplay();
    setPlayButtonAccessibleText();
    
  };