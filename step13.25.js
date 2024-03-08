/*Step 25
You can use @keyframes rules to control more than just the transformation of an element. In the 0% selector of your @keyframes cabins, set the background-color to yellow.*/



@keyframes cabins {
    0% {
      transform: rotate(0deg);
      background-color: yellow;
    }
    100% {
      transform: rotate(-360deg);
    }
  }