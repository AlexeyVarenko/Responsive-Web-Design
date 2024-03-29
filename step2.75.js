/*Step 75
You're already familiar with using the rgb function to set colors. To add an alpha channel to an rgb color, use the rgba function instead.

The rgba function works just like the rgb function, but takes one more number from 0 to 1.0 for the alpha channel:

rgba(redValue, greenValue, blueValue, alphaValue);
You can also use an alpha channel with hsl and hex colors. You will see how to do that soon.

In the .sleeve rule, use the rgba function to set the background-color property to pure white with 50% opacity.*/


.sleeve {
    width: 110px;
    height: 25px;
    background-color: rgba(255, 255, 255, 0.5);
  }