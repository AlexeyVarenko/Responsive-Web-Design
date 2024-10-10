/*Step 22
Inside the button element, create two more span elements.

The first span element should have a class of playlist-song-artist. In between the span tags, add ${song.artist}.

The second span element should have a class of playlist-song-duration. In between the span tags, add ${song.duration}.*/


<button class="playlist-song-info">
          <span class="playlist-song-title">${song.title}</span>
          <span class="playlist-song-artist">${song.artist}</span>
          <span class="playlist-song-duration">${song.duration}</span>
      </button>