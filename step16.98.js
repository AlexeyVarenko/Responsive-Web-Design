/*Step 98
When you were testing your function, you should have seen an error message in the console. This error is due to the condition in the buyWeapon function.

The currentWeaponIndex variable is the index of the weapons array, but array indexing starts at zero. The index of the last element in an array is one less than the length of the array.

Change the if condition to check weapons.length - 1, instead of weapons.length.

Test out your buyWeapon function again to see the error message disappear.*/



function buyWeapon() {
    if (currentWeaponIndex < weapons.length-1) {
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