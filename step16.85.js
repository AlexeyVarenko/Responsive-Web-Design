/*Step 85
In the previous project, you learned how to use the increment operator to increase a variable by 1.

Example Code
let num = 5;
num++;
// prints 6
console.log(num); 
Change your currentWeaponIndex assignment to use the increment operator.*/


function buyWeapon() {
    if (gold >= 30) {
      gold -= 30;
      currentWeaponIndex ++;
    }
  }