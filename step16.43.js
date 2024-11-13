/*Step 43
Move your goTown function above your goStore function. Then copy and paste the contents of the goStore function into the goTown function.*/



function goTown() {
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    text.innerText = "You enter the store.";
  }
  function goStore() {
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    text.innerText = "You enter the store.";
  }
  
  function goCave() {
    console.log("Going to cave.");
  }
  
  function fightDragon() {
    console.log("Fighting dragon.");
  }
  
  function buyHealth() {
  
  }
  
  function buyWeapon() {
  
  }
  