/*Step 119
Now, you will need to update the text for the current monster's name and health.

Start by assigning monsters[fighting].name to the innerText property of monsterName. Then, assign monsterHealth to the innerText property of monsterHealthText.*/



function goFight() {
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    monsterStats.style.display = "block";
    monsterName.innerText=monsters[fighting].name;
    monsterHealthText.innerText=monsterHealth;
  }