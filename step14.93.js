/*Step 93
Fun fact: Most, if not all, flippers are not naturally rectangles.

Give the .arm elements' top-left, top-right, and bottom-right corners a radius of 30%, and the bottom-left corner a radius of 120%.*/



.arm {
    width: 30%;
    height: 60%;
    background: linear-gradient(
      90deg,
      var(--penguin-skin),
      rgb(209, 210, 199)
    );
    border-radius: 30% 30% 30% 120%;
  }