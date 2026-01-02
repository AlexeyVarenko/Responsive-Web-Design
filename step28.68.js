/*Step 68
Below that, add a height property and assign it the number proportionalSize(40). You need to use the proportionalSize() function to make sure the height is proportional to the screen size.

Remember to use the this keyword to access the properties.*/



class Platform {
    constructor(x, y) {
      this.position = {
        x,
        y,
      };
      this.width = 200;
      this.height=proportionalSize(40);
    }
  }