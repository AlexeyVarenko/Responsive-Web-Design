/*Step 106
In the previous project, you learned how to work with the shift() method to remove the first element from an array like this:

Example Code
const myArray = ["first", "second", "third"];
const firstElement = myArray.shift();
// myArray is now ["second", "third"]
Use the shift() method to take the first element from the inventory array and assign it to your currentWeapon variable.*/



function sellWeapon() {
    if (inventory.length > 1) {
      gold += 15;
      goldText.innerText = gold;
      let currentWeapon = inventory.shift();
    }
  }