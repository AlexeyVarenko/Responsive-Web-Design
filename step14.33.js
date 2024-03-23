/*Step 33
Another interesting fact about penguins is that they do not have square bodies.

Use the border-radius property with a value of 80% 80% 100% 100%, to give the penguin a slightly rounded body.*/



.penguin-body {
    width: 53%;
    height: 45%;
    background: linear-gradient(
      45deg,
      rgb(134, 133, 133) 0%,
      rgb(234, 231, 231) 25%,
      white 67%
    );
    border-radius: 80% 80% 100% 100%;
  }