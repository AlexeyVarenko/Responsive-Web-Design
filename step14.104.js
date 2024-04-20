/*Step 104
Finally, calculate the height of the .ground element to be the height of the viewport minus the height of the .penguin element.

Congratulations! You have completed the Responsive Web Design certification.*/



.ground {
    width: 100vw;
    height: 400px;
    background: linear-gradient(90deg, rgb(88, 175, 236), rgb(182, 255, 255));
    z-index: 3;
    position: absolute;
    margin-top: -58px;
    height: calc(100vh - 300px);
  }