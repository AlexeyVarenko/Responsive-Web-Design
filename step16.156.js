/*Step 156
Remember that the increment operator ++ can be used to increase a variable's value by 1. There is also a decrement operator -- that can be used to decrease a variable's value by 1. For example :

Example Code
let num = 10;
num--;
console.log(num); // Output: 9
Decrement the value of currentWeaponIndex in your if statement, after you update the text.*/



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
      text.innerText += " Your " + inventory.pop() + " breaks.";
    currentWeaponIndex--;
    }
  }