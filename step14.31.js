/*Step 31
Most penguins do not have a square head.

Give the penguin a slightly oval head by setting the radius of the top corners to 70% and the radius of the bottom corners to 65%.*/



.penguin-head {
    width: 50%;
    height: 45%;
    background: linear-gradient(
      45deg,
      gray,
      rgb(239, 240, 228)
    );
    border-radius: 70% 70% 65% 65%;
  }