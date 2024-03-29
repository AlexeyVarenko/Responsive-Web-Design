/*Step 88
Notice that the edges of the shadow are sharp. This is because there is an optional blurRadius value for the box-shadow property:

box-shadow: offsetX offsetY blurRadius color;
If a blurRadius value isn't included, it defaults to 0 and produces sharp edges. The higher the value of blurRadius, the greater the blurring effect is.

In the .green CSS rule, add the box-shadow property with the values 5px for offsetX, 5px for offsetY, 5px for blurRadius, and green for color.*/


.green {
    background: linear-gradient(#55680D, #71F53E, #116C31);
    box-shadow: 5px 5px 5px green;
  }