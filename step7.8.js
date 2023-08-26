/*Step 8
A useful property of an SVG (scalable vector graphics) is that it contains a path attribute which allows the image to be scaled without affecting the resolution of the resultant image.

Currently, the img is assuming its default size, which is too large. CSS has a max function which returns the largest of a set of comma-separated values. For example:

img {
  width: max(250px, 25vw);
}
In this example, img elements will have a minimum width of 250px. And as the viewport grows, the image will grow accordingly to be 25 percent of the viewport width.

Scale the image using its id as a selector, and setting the width to be the maximum of 100px or 18vw.*/


#logo {
    width:max(100px, 18vw)
  }