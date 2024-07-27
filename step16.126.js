/*Step 126
Add an if statement to check if health is less than or equal to 0. If it is, call the lose function.*/



function attack() {
    text.innerText = "The " + monsters[fighting].name + " attacks.";
    text.innerText += " You attack it with your " + weapons[currentWeaponIndex].name + ".";
    health -= monsters[fighting].level;
    monsterHealth -= weapons[currentWeaponIndex].power + Math.floor(Math.random() * xp) + 1;
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;
    if(health<=0){
      lose()
    }
  }