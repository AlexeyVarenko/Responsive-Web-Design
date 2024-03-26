/*Step 40
Give the pseudo-element a width half that of its parent, a height of 45%, and a background-color of gray.*/


.penguin-body::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 45%;
    background-color: gray;
  }