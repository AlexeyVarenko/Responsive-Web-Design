/*Step 47
To store the current time of the song when it is paused, set the songCurrentTime of the userData object to the currentTime of the audio variable.

Note: You should not use optional chaining for this step because userData.songCurrentTime will not be null or undefined at this point.*/



const pauseSong = () => {
    userData.songCurrentTime=audio.currentTime;
    };