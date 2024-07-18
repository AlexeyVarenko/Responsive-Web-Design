/*Step 107
After your currentWeapon, use the concatenation operator to set text.innerText to the string "You sold a ", then currentWeapon, then the string ".".*/



function sellWeapon() {
    if (inventory.length > 1) {
      gold += 15;
      goldText.innerText = gold;
      let currentWeapon = inventory.shift();
    text.innerText="You sold a " + currentWeapon + ".";
    }
  }