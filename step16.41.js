/*Step 41
Now you need to modify your display text. Change the innerText property of the text to be "You enter the store.".*/


function goStore() {
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    text.innerText= "You enter the store."
  }