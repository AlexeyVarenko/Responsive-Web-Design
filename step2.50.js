/*Step 50
The linear-gradient function is very flexible -- here is the basic syntax you'll use in this tutorial:

linear-gradient(gradientDirection, color1, color2, ...);
gradientDirection is the direction of the line used for the transition. color1 and color2 are color arguments, which are the colors that will be used in the transition itself. These can be any type of color, including color keywords, hex, rgb, or hsl.

Now you'll apply a red-to-green gradient along a 90 degree line to the first marker.

First, in the .red CSS rule, set the background property to linear-gradient(), and pass it the value 90deg as the gradientDirection.*/


.red {
    background: linear-gradient(90deg);
  }