/*Step 84
The value of the currentWeaponIndex variable corresponds to an index in the weapons array. The player starts with a "stick", since currentWeaponIndex starts at 0 and weapons[0] is the "stick" weapon.

In the buyWeapon function, use compound assignment to add 1 to currentWeaponIndex - the user is buying the next weapon in the weapons array.*/



function buyWeapon() {
    if (gold >= 30) {
      gold -= 30;
      currentWeaponIndex += 1;
    }
  }