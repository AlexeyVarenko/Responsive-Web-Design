/*Step 89
weapons[currentWeaponIndex] is an object. Use dot notation to get the name property of that object.*/



function buyWeapon() {
    if (gold >= 30) {
      gold -= 30;
      currentWeaponIndex++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeaponIndex].name;
      text.innerText = "You now have a new weapon.";
    }
  }