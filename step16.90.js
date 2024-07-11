/*Step 90
In the previous project, you learned how to work with the concatenation operator to insert variables into a string like this:

Example Code
const organization = "freeCodeCamp";

// "Hello, our name is freeCodeCamp."
"Hello, our name is " + organization + ".";
Update the string "You now have a new weapon." to "You now have a " followed by the name of the new weapon, and remember to end the sentence with a period.*/


function buyWeapon() {
    if (gold >= 30) {
      gold -= 30;
      currentWeaponIndex++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeaponIndex].name;
      text.innerText = "You now have a "+ newWeapon + ".";
    }
  }