/*Step 51

Gradient transitions often gradually change from one color to another. You can make the change a solid line like this:

linear-gradient(
  var(--first-color) 0%,
  var(--first-color) 40%,
  var(--second-color) 40%,
  var(--second-color) 80%
);
Add a linear-gradient to .bb2b that uses --building-color2 from 0% to 6% and --window-color2 from 6% to 9%.*/


.bb2b {
    width: 100%;
    height: 100%;
    background: linear-gradient(
          var(--building-color2) 0%,
          var(--building-color2) 6%,
          var(--window-color2) 6%,
          var(--window-color2) 9%
        ); 
  }