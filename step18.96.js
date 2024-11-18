/*Step 96
Notice that the album art in the HTML and songs in the userData.songs array have changed. We've swapped out the original songs for shorter ones that you can use to test your app in the upcoming steps.

Next, you need to check if there is a next song to play. Retrieve the current song index by calling the getCurrentSongIndex() function, and save it in a currentSongIndex constant.

After that, create a nextSongExists constant that contains the boolean value true or false depending on if the next song exists.*/



audio.addEventListener("ended", () => {
    const currentSongIndex= getCurrentSongIndex();
    const nextSongExists= userData?.songs[currentSongIndex+1] !==undefined;
  });