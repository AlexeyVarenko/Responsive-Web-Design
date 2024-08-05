/*Step 146
The attack of the monster will be based on the monster's level and the player's xp. In the getMonsterAttackValue function, use const to create a variable called hit. Assign it the equation (level * 5) - (Math.floor(Math.random() * xp));.

This will set the monster's attack to five times their level minus a random number between 0 and the player's xp.*/



function getMonsterAttackValue(level) {
    const hit=(level * 5) - (Math.floor(Math.random() * xp));
  }