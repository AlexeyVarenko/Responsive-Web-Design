/*Step 11
The width and the height of the main player, platforms and checkpoints will be proportional sized relative to the innerHeight of the browser screen. The goal is to make the game responsive and visually consistent across different screen sizes.

Inside your proportionalSize function, you will need to return a ternary that checks if innerHeight is less than 500. If so, return Math.ceil((size / 500) * innerHeight), otherwise return size.*/



const proportionalSize = (size) => {
  return innerHeight<500?Math.ceil((size/500)*innerHeight):size;
};