/*Step 106
You don't need the background-color for this building anymore so you can remove that property.*/


.fb5 {
    width: 10%;
    height: 33%;
    position: relative;
    right: 10%;
    background: repeating-linear-gradient(
        var(--building-color2),
        var(--building-color2) 5%,
        transparent 5%,
        transparent 10%
      ),
      repeating-linear-gradient(
        90deg,
        var(--building-color2),
        var(--building-color2) 12%,
        var(--window-color2) 12%,
        var(--window-color2) 44%
      );
  }