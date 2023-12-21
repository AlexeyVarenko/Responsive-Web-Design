/*Step 23
That didn't work. You should add a fallback value to a variable by putting it as the second value of where you use the variable like this: var(--variable-name, fallback-value). The property will use the fallback value when there's a problem with the variable. Add a fallback value of green to the background-color of .bb2.*/



.bb2 {
    width: 10%;
    height: 50%;
    background-color: var(--building-color2, green);
  }