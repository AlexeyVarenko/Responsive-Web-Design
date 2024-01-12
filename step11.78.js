/*Step 78
You can add multiple gradients to an element by separating them with a comma (,) like this:

gradient1(
  colors
),
gradient2(
  colors
);
Add a repeating-linear-gradient to .fb1c below the one that's there; use your --building-color4 from 0% to 10% and --window-color4 from 10% and 90%. This will fill in behind the gradient you added last.*/



.fb1c {
    width: 100%;
    height: 80%;
    background: repeating-linear-gradient(
        90deg,
        var(--building-color4),
        var(--building-color4) 10%,
        transparent 10%,
        transparent 15%
      ),
      repeating-linear-gradient(
        var(--building-color4),
        var(--building-color4) 10%,
        var(--window-color4) 10%,
        var(--window-color4) 90%
  
      )
  }