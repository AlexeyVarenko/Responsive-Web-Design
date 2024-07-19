/*Step 109
Use an else statement to run when the inventory length is not more than one. Set the text.innerText to say "Don't sell your only weapon!".*/


function sellWeapon() {
    if (inventory.length > 1) {
      gold += 15;
      goldText.innerText = gold;
      let currentWeapon = inventory.shift();
      text.innerText = "You sold a " + currentWeapon + ".";
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "Don't sell your only weapon!" ;
    }
  }