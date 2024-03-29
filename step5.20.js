/*Step 20
The ::after pseudo-element creates an element that is the last child of the selected element. You can use it to add an empty element after the last image. If you give it the same width as the images it will push the last image to the left when the gallery is in a two-column layout. Right now, it is in the center because you set justify-content: center on the flex container.

Example:

.container::after {
  content: "";
  width: 860px;
}
Create a new selector using an ::after pseudo-element on the .gallery element. Add a content property set to an empty string "" and 350px set for the width property.*/


.gallery::after{
    width:350px;
    content: "";
  }