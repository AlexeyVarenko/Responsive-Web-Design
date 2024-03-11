/*Step 29
Finally, create a new 75% selector between your 50% and 100% selectors. Give this new selector a background-color property set to yellow.

With that, your animation is much smoother and your Ferris wheel is complete.*/



@keyframes cabins {
    0% {
      transform: rotate(0deg);
    }
    25% {
      background-color: yellow;
    }
    50% {
      background-color: purple;
    }
    75% {
      background-color: yellow;
    }
    100% {
      transform: rotate(-360deg);
    }
  }