/*Step 89
But what if you wanted to expand the shadow out further? You can do that with the optional spreadRadius value:

box-shadow: offsetX offsetY blurRadius spreadRadius color;
Like blurRadius, spreadRadius defaults to 0 if it isn't included.

Practice by adding a 5 pixel shadow directly around the blue marker.

In the .blue CSS rule, add the box-shadow property with the values 0 for offsetX, 0 for offsetY, 0 for blurRadius, 5px for spreadRadius, and blue for color.*/


.blue {
    background: linear-gradient(hsl(186, 76%, 16%), hsl(223, 90%, 60%), hsl(240, 56%, 42%));
     box-shadow: 0 0 0 5px blue;
  }