/*Step 88
Use bracket notation to access an object within the weapons array and assign it to your newWeapon variable. Place the variable currentWeaponIndex within the brackets.

When you use a variable in bracket notation, you are accessing the property or index by the value of that variable.

For example, this code uses the index variable to access a value of array.

Example Code
let value = array[index];*/



function buyWeapon() {
    if (gold >= 30) {
      gold -= 30;
      currentWeaponIndex++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeaponIndex];
      text.innerText = "You now have a new weapon.";
    }
  }