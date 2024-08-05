/*Step 147
Log the value of hit to the console to use in debugging. Remember that you can do this with console.log().*/



function getMonsterAttackValue(level) {
    const hit = (level * 5) - (Math.floor(Math.random() * xp));
    console.log(hit)
  }