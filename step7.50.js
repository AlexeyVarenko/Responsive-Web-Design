/*Step 50
On small screens, the unordered list in the navigation bar overflows the right side of the screen.

Fix this by using Flexbox to wrap the ul content. Then, set the following CSS properties to correctly align the text:

align-items: center;
padding-inline-start: 0;
margin-block: 0;
height: 100%;*/


nav > ul {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items:center;
     padding-inline-start: 0;
     margin-block: 0;
     height: 100%;
  }