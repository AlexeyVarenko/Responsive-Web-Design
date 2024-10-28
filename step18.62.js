/*Step 62
You need to get the id of the currently playing song. For this, you can use userData?.currentSong?.id.

Use getElementById() to get the id of the currently playing song, then use template literals to prefix it with song-. Assign it to the constant songToHighlight.*/



const highlightCurrentSong = () => {
    const playlistSongElements = document.querySelectorAll(".playlist-song");
    const songToHighlight= document.getElementById(`song-${userData?.currentSong?.id}`)
    
  };