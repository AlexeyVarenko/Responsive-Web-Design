/*Step 121
On a new line, use the addition assignment operator(+=), to add the string " You attack it with your <weapon>." to the text value, replacing <weapon> with the player's current weapon. Additionally, remember that this line of text starts with a space so it will properly display.*/



function attack() {
  text.innerText = "The " + monsters[fighting].name + " attacks.";
   text.innerText += " You attack it with your " + weapons[currentWeaponIndex].name +"."
}