/*Step 54
Much like Flexbox, with CSS Grid you can align the content of grid items with align-items and justify-items. align-items will align child elements along the column axis, and justify-items will align child elements along the row axis.

Give the .social-icons selector an align-items property set to center.*/



.social-icons {
    display: grid;
    font-size: 3rem;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    align-items: center;
  }