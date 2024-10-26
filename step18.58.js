/*Step 58
Within the playPreviousSong function, add an if statement with a condition of userData?.currentSong === null. This will check if there is currently no song playing. If there isn't any, exit the function using a return.

Inside the else block, create a constant named currentSongIndex and assign it getCurrentSongIndex().*/



const playPreviousSong = () => {
    if (userData?.currentSong === null){
      return
    } else {
     const currentSongIndex=getCurrentSongIndex();
    }
  };