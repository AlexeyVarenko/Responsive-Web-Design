/*Step 131
Set xp to xp plus the monster's level.*/


function defeatMonster() {
    gold += Math.floor(monsters[fighting].level * 6.7);
    xp+=monsters[fighting].level;
  }
