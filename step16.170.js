/*Step 170
Inside the if statement, add the string "Right! You win 20 gold!" to the end of text.innerText. Also, add 20 to the value of gold and update the goldText.innerText.*/


function pick(guess) {
    const numbers = [];
    while (numbers.length < 10) {
      numbers.push(Math.floor(Math.random() * 11));
    }
    text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
    for (let i = 0; i < 10; i++) {
      text.innerText += numbers[i] + "\n";
    }
    if (numbers.includes(guess)) {
      text.innerText += "Right! You win 20 gold!"
      gold += 20;
      goldText.innerText = gold;
    }
  }