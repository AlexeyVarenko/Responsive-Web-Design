/*Step 27
Because the animation is on an infinite loop and the start and end colors are not the same, the transition appears jerky when it switches back to yellow from red.

To start fixing this, remove the background-color from your 0% selector.*/


@keyframes cabins {
    0% {
      transform: rotate(0deg);
    }
    50% {
      background-color: purple;
    }
    100% {
      transform: rotate(-360deg);
    }
  }