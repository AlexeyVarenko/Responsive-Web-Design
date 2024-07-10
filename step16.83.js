/*Step 86
Now update the goldText element to display the new value of gold, and update the text element to display "You now have a new weapon.".*/



function buyWeapon() {
    if (gold >= 30) {
      gold -= 30;
      currentWeaponIndex++;
      goldText.innerText=gold;
      text.innerText="You now have a new weapon.";
    }
  }