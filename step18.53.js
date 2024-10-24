/*Step 53
Inside the playNextSong function, create an if statement to check if the currentSong of userData is strictly equal to null. This will check if there's no current song playing in the userData object.

If the condition is true, call the playSong function with the id of the first song in the userData?.songs array as an argument.*/


const playNextSong = () => {
    if (userData?.currentSong === null){
    playSong(userData?.songs[0].id)
    }
    }