/*Step 76
In the map callback function, pass in platform for the parameter and implicitly return the creation of a new Platform instance with the platform.x and platform.y values passed in as arguments.*/



const platforms = platformPositions.map((platform)=> new Platform(
  platform.x,
  platform.y
)

);