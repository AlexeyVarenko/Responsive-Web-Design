/*Step 95
All the core functionalities are now in place. The only issue now is that the next song does not automatically play when the currently playing song ends.

To fix that, you can set up an event listener which will detect when the currently playing song ends. The "ended" event listener is appropriate for this. It is fired when the playback of a media reaches the end.

Add an event listener to the audio element which listens for the "ended" event. Pass in a callback using arrow syntax with empty curly braces.*/




audio.addEventListener("ended", ()=>{
  
});