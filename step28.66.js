/*Step 66
When working with objects where the property name and value are the same, you can use the shorthand property name syntax. This syntax allows you to omit the property value if it is the same as the property name.

Example Code
// using shorthand property name syntax
obj = {
  a, b, c
}
The following code is the same as:

Example Code
obj = {
  a: a,
  b: b,
  c: c
}
Inside the constructor, add this.position and assign it an object with the x and y coordinates. Make sure to use the shorthand property syntax .*/



class Platform {
    constructor(x, y) {
      this.position={
        x,y
      }
    }
  }