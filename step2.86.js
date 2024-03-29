/*Step 86
The last thing you'll do is add a slight shadow to each marker to make them look even more realistic.

The box-shadow property lets you apply one or more shadows around an element. Here is basic syntax:

box-shadow: offsetX offsetY color;
Here's how the offsetX and offsetY values work:

both offsetX and offsetY accept number values in px and other CSS units
a positive offsetX value moves the shadow right and a negative value moves it left
a positive offsetY value moves the shadow down and a negative value moves it up
if you want a value of zero (0) for any or both offsetX and offsetY, you don't need to add a unit. Every browser understands that zero means no change.
The height and width of the shadow is determined by the height and width of the element it's applied to. You can also use an optional spreadRadius value to spread out the reach of the shadow. More on that later.

Start by adding a simple shadow to the red marker.

In the .red CSS rule, add the box-shadow property with the values 5px for offsetX, 5px for offsetY, and red for color.*/


.red {
    background: linear-gradient(rgb(122, 74, 14), rgb(245, 62, 113), rgb(162, 27, 27));
    box-shadow:5px 5px red
  }