/*Step 90
Now that you've created the resetButton, you need to assign it an id and aria-label attributes. JavaScript provides the id and ariaLabel properties you need to use for this.

For example, element.id would set an id attribute, and element.ariaLabel would set an aria-label attribute. Both of them accept their values as a string.

Set the id attribute of the resetButton element to "reset" and its aria-label attribute to "Reset playlist".*/



if (userData?.songs.length === 0) {
    const resetButton = document.createElement("button");
    const resetText = document.createTextNode("Reset Playlist");
    resetButton.id="reset";
    resetButton.arialabel ="Reset playlist";

  }