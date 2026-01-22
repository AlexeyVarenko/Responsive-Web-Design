/*Step 96
The next step is to add the width and height to the CheckPoint class.

The width and height should be proportionalSize(40) and proportionalSize(70) respectively.*/


class CheckPoint {
  constructor(x, y, z) {
    this.position = {
      x,
      y,
    };
    this.width=proportionalSize(40)
    this.height=proportionalSize(70)
  };
};


