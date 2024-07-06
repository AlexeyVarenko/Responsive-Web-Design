/*Step 77
What if the player doesn't have enough gold to buy health? You should use an if statement to check if the player has enough gold to buy health.

In the previous project, you learned how to work with if statements like this:

Example Code
const num = 5;
if (num >= 3) {
  console.log("This code will run because num is greater than or equal to 3.");
}
Start by placing all of the code in your buyHealth function inside an if statement. For the if statement condition, check if gold is greater than or equal to 10.*/


function buyHealth() {
    if(gold>=10){
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
    
  
    }
  }