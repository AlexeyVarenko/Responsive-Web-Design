/*Step 42
Round off the crest, by giving the pseudo-element bottom corners a radius of 100%, leaving the top corners at 0%.*/


.penguin-body::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 45%;
    background-color: gray;
    top: 10%;
    left: 25%;
    border-radius: 0% 0% 100% 100%;
  }