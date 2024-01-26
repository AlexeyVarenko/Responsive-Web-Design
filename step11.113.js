/*Step 113
At the top of the sky gradient color list, where you would put a direction for the gradient; add circle closest-corner at 15% 15%,. This will move the start of the gradient to 15% from the top and left. It will make it end at the closest-corner and it will maintain a circle shape. These are some keywords built into gradients to describe how it behaves.*/



.sky {
    background: radial-gradient(
      circle closest-corner at 15% 15%,
        #ffcf33,
        #ffcf33 20%,
        #ffff66 21%,
        #bbeeff 100%
      );
  }