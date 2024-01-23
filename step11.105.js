/*Step 105
Add another repeating-linear-gradient below the one you just added. Give it a 90deg direction, use your building color from 0% to 12% and window color 12% to 44%. This will make a bunch of rectangle windows.*/


.fb5 {
    width: 10%;
    height: 33%;
    background-color: var(--building-color2);
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
      )
  }