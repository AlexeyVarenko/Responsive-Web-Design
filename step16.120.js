/*Step 120
Now you can build the attack function. First, update the text message to say "The <monster name> attacks.", replacing <monster name> with the name of the monster. Remember you can use the concatenation operator for this.*/



function attack() {
    text.innerText="The " +monsters[fighting].name+ " attacks."
  }