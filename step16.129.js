/*Step 129
Inside the dodge function, set text.innerText equal to the string "You dodge the attack from the <monster>". Replace <monster> with the name of the monster, using the name property.*/



function dodge() {
    text.innerText = "You dodge the attack from the " +monsters[fighting].name + "."
  }