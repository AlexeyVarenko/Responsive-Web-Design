/*Step 102
When you activate the .penguin element, it might look as though you can drag it around. This is not true.

Indicate this to users, by giving the active element a cursor property of not-allowed.*/


.penguin:active {
    transform: scale(1.5);
    cursor: not-allowed;
  }