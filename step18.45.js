/*Step 45
To play the song anytime the user clicks on it, add an onclick attribute to the first button element. Inside the onclick, call the playSong function with song.id.

Don't forget you need to interpolate with the dollar sign here.*/



<button class="playlist-song-info" onclick="playSong(${song.id})">
          <span class="playlist-song-title">${song.title}</span>
          <span class="playlist-song-artist">${song.artist}</span>
          <span class="playlist-song-duration">${song.duration}</span>
      </button>