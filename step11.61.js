/*Step 61
Remove the background-color property and value from .bb3 since you are using the gradient as the background now.*/


.bb3 {
    width: 10%;
    height: 55%;
    background: repeating-linear-gradient(
        90deg,
        var(--building-color3),
        var(--building-color3),
        var(--window-color3) 15%
      );
  }