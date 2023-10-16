/*Step 53
Create a selector to target your td elements within your table body. Give them a width to fill the viewport, with a minimum and maximum of 4rem. This approach ensures that the width is fixed, whereas setting width specifically would allow the elements to shrink to the container.*/


tbody td{
    width: 100vw;
    min-width: 4rem;
    max-width: 4rem;
  }