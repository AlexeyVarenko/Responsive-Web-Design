/*Step 47
To make the navigation buttons look more like typical buttons, remove the underline from the anchor tags.

Then, create a new selector targeting the navigation list elements so that when the cursor hovers over them, the background color and text color are switched, and the cursor becomes a pointer.*/


li > a {
    color: inherit;
    text-decoration: none;
  }
  nav > ul > li:hover{
    background-color: #dfdfe2;
    color:#1b1b32; 
    cursor: pointer
  }