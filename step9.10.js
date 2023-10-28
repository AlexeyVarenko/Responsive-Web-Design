/*Step 10

You could see that nothing happens. The .cat-head element did not move despite setting a top and left of 100px each. But that's not the case with relative positioning.

When you use the relative value, the element is still positioned according to the normal flow of the document, but the top, left, bottom, and right values become active.

Instead of static, give your .cat-head a position of relative, and leave both top and left properties as they are.*/


position: relative;
  top: 100px;
  left: 100px;