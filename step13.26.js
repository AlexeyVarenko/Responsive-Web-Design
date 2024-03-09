/*Step 26
Between the 0% and 100% selectors, add a 50% selector. This will apply in the middle of the animation cycle. Set the background-color to purple.*/


@keyframes cabins {
    0% {
      transform: rotate(0deg);
      background-color: yellow;
    }
    50%{
      background-color: purple;
    }
    100% {
      transform: rotate(-360deg);
    }
  }