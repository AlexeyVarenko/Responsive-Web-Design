/*Step 91
To keep the linear gradient on the correct side of the penguin's left arm, first rotate it by 130deg, then invert the x-axis.*/



.arm.left {
  top: 35%;
  left: 5%;
  transform-origin: top left; 
  transform: rotate(130deg) scaleX(-1);
}