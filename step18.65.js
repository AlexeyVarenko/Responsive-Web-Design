/*Step 65
Now you need to add the attribute back to the currently playing song.

Create an if statement with the condition songToHighlight. For the statement, use setAttribute on songToHighlight to pass in "aria-current" and "true" as the first and second arguments.*/



if(songToHighlight) {
    songToHighlight.setAttribute("aria-current", "true");
  }