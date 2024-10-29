/*Step 64
Within the callback function, use the removeAttribute() method to remove the "aria-current" attribute. This will remove the attribute for each of the songs.*/



playlistSongElements.forEach((songEl) => {
    songEl.removeAttribute("aria-current")
  });