/*Step 78
It looks like your sleeve disappeared, but don't worry -- it's still there. What happened is that your new cap div is taking up the entire width of the marker, and is pushing the sleeve down to the next line.

This is because the default display property for div elements is block. So when two block elements are next to each other, they stack like actual blocks. For example, your marker elements are all stacked on top of each other.

To position two div elements on the same line, set their display properties to inline-block.

Create a new rule to target both the cap and sleeve classes, and set display to inline-block.*/

.cap, .sleeve{
    display:inline-block;
  }