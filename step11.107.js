/*Step 107
Finally! You made it to the last building! Add a repeating gradient to it with a 90deg direction. Use the building color from 0% to 10% and transparent from 10% to 30%.*/



.fb6 {
    width: 9%;
    height: 38%;
    background-color: var(--building-color3);
    background: repeating-linear-gradient(
          90deg,
          var(--building-color3),
          var(--building-color3) 10%,
          transparent 10%,
          transparent 30%
        )
  }