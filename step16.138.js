/*Step 138
At the end of your code, create a restart function. Inside this function, set xp to 0, health to 100, gold to 50, currentWeaponIndex to 0, and set inventory to an array with the string stick.

Also update the innerText properties of goldText, healthText, and xpText to their current values.

Finally, call the goTown() function.*/



function restart() {
    let xp = 0;
    let health = 100;
    let gold = 50;
    let currentWeaponIndex = 0;
    let inventory = ["stick"];
    goldText.innerText = gold;
    healthText.innerText = health;
    xpText.innerText = xp;
    goTown();
  }