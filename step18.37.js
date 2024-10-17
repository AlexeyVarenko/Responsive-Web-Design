/*Step 37
Inside the playSong function, set the audio.src property equal to song.src. This tells the audio element where to find the audio data for the selected song.

Also, set the audio.title property equal to song.title. This tells the audio element what to display as the title of the song.*/


const playSong = (id) => {
    const song = userData?.songs.find((song) => song.id === id);
    audio.src=song.src;
    audio.title=song.title;
  };