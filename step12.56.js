/*Step 56
Your .text element is not a CSS Grid, but you can create columns within an element without using Grid by using the column-width property.

Give your .text selector a column-width property set to 25rem.*/


.text {
    grid-column: 2 / 3;
    font-size: 1.8rem;
    letter-spacing: 0.6px;
    column-width: 25rem;
  }