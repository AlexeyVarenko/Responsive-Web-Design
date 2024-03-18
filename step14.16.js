/*Step 16
To make the mountain look more like a mountain, you can use the skew transform function, which takes two arguments. The first being an angle to shear the x-axis by, and the second being an angle to shear the y-axis by.

Use the transform property to skew the mountain by 0deg in the x-axis and 44deg in the y-axis.*/



.left-mountain {
    width: 300px;
    height: 300px;
    background: linear-gradient(rgb(203, 241, 228), rgb(80, 183, 255));
    position: absolute;
    transform: skew(0deg, 44deg)
  }