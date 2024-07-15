/*Step 96
Arrays have a length property that returns the number of items in the array. You may want to add new values to the weapons array in the future.

Change your if condition to check if currentWeaponIndex is less than the length of the weapons array. An example of checking the length of an array myArray would look like myArray.length.*/


function buyWeapon() {
    if (currentWeaponIndex < weapons.length) {
      if (gold >= 30) {
        gold -= 30;
        currentWeaponIndex++;
        goldText.innerText = gold;
        let newWeapon = weapons[currentWeaponIndex].name;
        text.innerText = "You now have a " + newWeapon + ".";
        inventory.push(newWeapon);
        text.innerText += " In your inventory you have: " + inventory;
      } else {
        text.innerText = "You do not have enough gold to buy a weapon.";
      }
    }
  }