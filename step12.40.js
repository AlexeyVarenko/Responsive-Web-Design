/*Step 40
Give your .heading selector a row-gap property set to 1.5rem.*/


.heading {
    grid-column: 2 / 3;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap:1.5rem;
  }