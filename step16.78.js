/*Step 78
Now when a player tries to buy health, it will only work if they have enough money. If they do not, nothing will happen. Add an else statement where you can put code to run if a player does not have enough money.

In the previous project, you learned how to work with else statements like this:

Example Code
if (num >= 5) {

} else {

}*/


function buyHealth() {
    if (gold >= 10) {
      gold -= 10;
      health += 10;
      goldText.innerText = gold;
      healthText.innerText = health;
    } else {
      
    }
  }