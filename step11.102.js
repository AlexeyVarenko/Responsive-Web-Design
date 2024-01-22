/*Step 102
The windows are stacked on top of each other on the rightmost purple building. Turn the building into a flexbox parent, and use the flex-wrap property to put the windows side by side, and push them down to a new row when they don't fit.*/


.fb4b {
    width: 100%;
    height: 89%;
    background-color: var(--building-color1);
    display: flex;
    flex-wrap: wrap;
  }