/*Step 123
Set monsterHealth to monsterHealth minus the power of the player's current weapon.

Remember that you can access the power of the player's current weapon using weapons[currentWeaponIndex].power.*/



function attack() {
    text.innerText = "The " + monsters[fighting].name + " attacks.";
    text.innerText += " You attack it with your " + weapons[currentWeaponIndex].name + ".";
    health -= monsters[fighting].level;
    monsterHealth -= weapons[currentWeaponIndex].power;
  }