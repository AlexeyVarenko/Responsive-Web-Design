/*tep 35
To add space between rows in the grid layout, you can use the row-gap property. Give the main selector a row-gap property of 3rem.*/



main {
    display: grid;
    grid-template-columns: minmax(2rem, 1fr) minmax(min-content, 94rem) minmax(2rem, 1fr);
    row-gap: 3rem;
  }