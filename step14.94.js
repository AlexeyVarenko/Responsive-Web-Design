/*Step 94
Change the .arm elements' stacking order such that they appear behind the .penguin-body element.*/



.arm {
    width: 30%;
    height: 60%;
    background: linear-gradient(
      90deg,
      var(--penguin-skin),
      rgb(209, 210, 199)
    );
    border-radius: 30% 30% 30% 120%;
    z-index: -1;
  }