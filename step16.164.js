/*Step 164
Inside your while loop, push a random number between 0 and 10 to the end of the numbers array. You can create this random number with Math.floor(Math.random() * 11).*/


function pick(guess) {
    const numbers = [];
    while (numbers.length < 10) {
      numbers.push(Math.floor(Math.random() * 11))
    }
  }