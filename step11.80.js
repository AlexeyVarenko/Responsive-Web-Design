/*Step 80
When you increase the size of the left and right borders, the border on the bottom will expand to be the width of the combined left and right border widths. Add 2vw solid transparent as the value of the border-left and border-right properties of .fb1a. They will be invisible, but it will make the border on the bottom 4vw wide.*/



.fb1a {
    border-bottom: 7vh solid var(--building-color4);
    border-right: 2vw solid transparent;
    border-left: 2vw solid transparent; 
  }