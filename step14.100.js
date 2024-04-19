/*Step 100
Use the wave animation on the left arm. Have the animation last 3s, infinitely iterate, and have a linear timing function.*/



.arm.left {
    top: 35%;
    left: 5%;
    transform-origin: top left; 
    transform: rotate(130deg) scaleX(-1);
    animation-name: wave;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }