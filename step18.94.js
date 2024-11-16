/*Step 94
Finally, you should render the songs again, update the play button's accessible text, and remove the reset button from the playlist. You also need to remove the resetButton from the DOM.

Call the renderSongs() function with sortSongs() as an argument to render the songs again in alphabetical order.

Call the setPlayButtonAccessibleText() function to update the play button's accessible text.

Remove the reset button from the playlist by calling the remove() method on the resetButton variable.

Note: Now you can try removing all the songs to see what happens.*/





resetButton.addEventListener("click", () => {
    userData.songs = [...allSongs];
  renderSongs(sortSongs());
  setPlayButtonAccessibleText();
  resetButton.remove();
  });