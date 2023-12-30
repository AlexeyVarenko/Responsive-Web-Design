/*Step 45
It's a little hidden behind the foreground buildings, but you can see the three color gradient there. Since you are using that now, remove the background-color property from .bb1d.*/


.bb1d {
    width: 100%;
    height: 70%;
    background: linear-gradient(
        orange,
        var(--building-color1),
        var(--window-color1)
      );
  }