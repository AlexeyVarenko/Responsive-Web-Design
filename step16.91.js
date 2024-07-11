/*Step 91
Back at the beginning of this project, you created the inventory array. Add the newWeapon to the end of the inventory array using the push() method.

In the previous project, you learned how to work with the push method like this:

Example Code
const myArray = [];
myArray.push("new item");
// myArray is now ["new item"]*/


function buyWeapon() {
    if (gold >= 30) {
      gold -= 30;
      currentWeaponIndex++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeaponIndex].name;
      text.innerText = "You now have a " + newWeapon + ".";
      
      inventory.push(newWeapon);
    }
  }