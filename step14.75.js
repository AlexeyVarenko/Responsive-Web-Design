/*Step 75
In some browsers, the heart emoji may look slightly different from the previous step. This is because some of the character's properties were overridden by the font-weight style of bold.

Fix this, by targeting the div with the heart emoji, and setting its font-weight to its original value.*/



.shirt div {
    font: bold 25px Helvetica, sans-serif;
    font-weight: normal;
  }
  