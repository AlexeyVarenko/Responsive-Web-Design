/*Step 77
Don't worry about the space at the bottom, everything will get moved down later when you add some height to the element at the top of the building.

Add a repeating-linear-gradient to .fb1c with a 90deg angle, your --building-color4 from 0% to 10% and transparent from 10% to 15%.*/



.fb1c {
    width: 100%;
    height: 80%;
    background: repeating-linear-gradient(90deg, var(--building-color4), var(--building-color4)10%, transparent 10%, transparent 15%)
  }