/*Step 155
Use the += operator to add " Your <weapon> breaks.", with a space in front of Your, to the end of text.innerText. Replace <weapon> with the last item in the inventory array using inventory.pop(), which will remove the last item in the array AND return it so it appears in your string.*/



function attack() {
    text.innerText = "The " + monsters[fighting].name + " attacks.";
    text.innerText += " You attack it with your " + weapons[currentWeaponIndex].name + ".";
    health -= getMonsterAttackValue(monsters[fighting].level);
    if (isMonsterHit()) {
      monsterHealth -= weapons[currentWeaponIndex].power + Math.floor(Math.random() * xp) + 1;    
    } else {
      text.innerText += " You miss.";
    }
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;
    if (health <= 0) {
      lose();
    } else if (monsterHealth <= 0) {
      if (fighting === 2) {
        winGame();
      } else {
        defeatMonster();
      }
    }
    if (Math.random() <= .1) {
      text.innerText += " Your "+ inventory.pop() + " breaks.";
    }
  }