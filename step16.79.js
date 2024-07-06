/*Step 79
Inside the else statement, set text.innerText to equal "You do not have enough gold to buy health.".*/




function buyHealth() {
    if (gold >= 10) {
      gold -= 10;
      health += 10;
      goldText.innerText = gold;
      healthText.innerText = health;
    } else {
      text.innerText="You do not have enough gold to buy health."
    }
  }