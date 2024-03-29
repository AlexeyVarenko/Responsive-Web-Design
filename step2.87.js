/*Step 87
As you can see, you added a simple red shadow around your marker that's 5 pixels to the right, and 5 pixels down.

But what if you wanted to position your shadow on the opposite side? You can do that by using negative values for offsetX and offsetY.

Update the values for the box-shadow property, and set offsetX to -5px, and offsetY to -5px.*/

.red {
    background: linear-gradient(rgb(122, 74, 14), rgb(245, 62, 113), rgb(162, 27, 27));
    box-shadow: -5px -5px red;
  }