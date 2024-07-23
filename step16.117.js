/*Step 117
Below your update call, set the monsterHealth to be the health of the current monster. You can get this value by accessing the health property of monsters[fighting] with dot notation.*/


function goFight() {
    update(locations[3]);
   monsterHealth = monsters[fighting].health;
  }