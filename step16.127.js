/*Step 127
You can make an else statement conditional by using else if. Here's an example:

Example Code
if (num > 10) {

} else if (num < 5) {

}
At the end of your if statement, add an else if statement to check if monsterHealth is less than or equal to 0. In your else if, call the defeatMonster function.*/



function attack() {
    text.innerText = "The " + monsters[fighting].name + " attacks.";
    text.innerText += " You attack it with your " + weapons[currentWeaponIndex].name + ".";
    health -= monsters[fighting].level;
    monsterHealth -= weapons[currentWeaponIndex].power + Math.floor(Math.random() * xp) + 1;
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;
    if (health <= 0) {
      lose();
    } else if (monsterHealth<=0){
      defeatMonster()
    }
  }