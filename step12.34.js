/*Step 34
Use the minmax function to make your columns responsive on any device. The minmax function takes two arguments, the first being the minimum value and the second being the maximum. These values could be a length, percentage, fr, or even a keyword like max-content.

Wrap each of your already defined values of the grid-template-columns property in a minmax function, using each value as the second argument. The first argument should be 2rem, min-content, and 2rem respectively.*/



main {
    display: grid;
    grid-template-columns: minmax(2rem, 1fr) minmax(min-content, 94rem) minmax(2rem, 1fr);
    
  }