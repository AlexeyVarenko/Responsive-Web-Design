/*Step 108
Add another repeating gradient to this building; make it the same as the one you just added, except don't add the 90deg direction and use your window color instead of the two transparent colors.*/


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
    ),
    repeating-linear-gradient(
      var(--building-color3),
      var(--building-color3) 10%,
      var(--window-color3) 10%,
      var(--window-color3) 30%
    )
  }