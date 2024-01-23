/*Step 104
On to the next building! It's the green one in the foreground. Give it a repeating-linear-gradient with your building color from 0% to 5%, and transparent from 5% to 10%.*/



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
          )
  }