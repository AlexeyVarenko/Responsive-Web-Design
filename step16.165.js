/*Step 165
After the while loop, set text.innerText to equal "You picked <someGuess>. Here are the random numbers:". Replace <someGuess> with the guess function parameter.*/


function pick(guess) {
    const numbers = [];
    while (numbers.length < 10) {
      numbers.push(Math.floor(Math.random() * 11));
    }
    text.innerText= "You picked " + guess + ". Here are the random numbers:"
  }