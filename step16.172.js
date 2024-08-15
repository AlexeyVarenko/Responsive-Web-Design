/*Step 172
Since you subtracted health from the player, you need to check if the player's health is less than or equal to 0. If it is, call the lose function.*/


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
      text.innerText += "Right! You win 20 gold!";
      gold += 20;
      goldText.innerText = gold;
    } else {
      text.innerText += "Wrong! You lose 10 health!";
      health -= 10;
      healthText.innerText = health;
    if(health<=0){
      lose();
    }
    }
  }