/*Step 41
Position the pseudo-element 10% from the top and 25% from the left of its parent.*/



.penguin-body::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 45%;
    background-color: gray;
    top: 10%;
    left: 25%;
  }