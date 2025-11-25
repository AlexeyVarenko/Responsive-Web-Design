/*Step 15
Inside your position object, add a new key called x with a value of proportionalSize(10). After that, add another key called y with a value of proportionalSize(400).

You need to use the proportionalSize function here to make sure that the player's position is always proportional to the screen size. This is important because you want the player to be able to move around the screen regardless of the screen size.*/



class Player {
  constructor() {
    this.position = {
      x:proportionalSize(10),
      y:proportionalSize(400)
    }
  }
}