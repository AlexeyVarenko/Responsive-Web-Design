/*Step 41
Next, use the classList property and the add() method to add the "playing" class to the playButton element. This will look for the class "playing" in the CSS file and add it to the playButton element.

To finally play the song, use the play() method on the audio variable. play() is a method from the web audio API for playing an mp3 file.*/


playButton.classList.add('playing');
audio.play();