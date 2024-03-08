/*Step 24
To make your cabin animation seem more like a natural swinging motion, you can use the ease-in-out timing function. This setting will tell the animation to start and end at a slower pace, but move more quickly in the middle of the cycle.

Replace linear to ease-in-out in the .cabin selector.*/



.cabin {
    background-color: red;
    width: 20%;
    height: 20%;
    position: absolute;
    border: 2px solid;
    transform-origin: 50% 0%;
    animation: cabins 10s ease-in-out infinite;
  
  }