/*Step 91
You need to add the resetText to the resetButton element as a child, and also the resetButton to the playlistSongs element as a child. For this, there is an appendChild() method to use.

appendChild() lets you add a node or an element as the child of another element. In the example below, the text "Click me" would be attached to the button:

Example Code
const parentElement = document.createElement("button")
const parentElementText = document.createTextNode("Click me")

// attach the text "Click me" to the button
parentElement.appendChild(parentElementText)
Use appendChild() to attach resetText to resetButton element, and resetButton to the playlistSongs element.*/




resetButton.appendChild(resetText);
  playlistSongs.appendChild(resetButton);