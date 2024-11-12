/*Step 89
Now that you've created the button, you need to assign it a text. To do this, you need to use the createTextNode() method of DOM.

The createTextNode() method is used to create a text node. To use it, you call it and pass in the text as a string:

Example Code
document.createTextNode("your text")
You can also assign it to a variable:

Example Code
const myText = document.createTextNode("your text")
Use the createTextNode() method to create a "Reset Playlist" text, then assign it to a resetText constant.*/



if (userData?.songs.length === 0) {
    const resetButton = document.createElement("button");
    const resetText = document.createTextNode("Reset Playlist")
  
  }