/*Step 134
Your locations array doesn't have a fifth element, so locations[4] doesn't work.

Add a new object at the end of the locations array, following the same structure as the other objects. Set name to "kill monster", set "button text" to an array with three "Go to town square" strings, set "button functions" to an array with three goTown variables, and set text to "The monster screams Arg! as it dies. You gain experience points and find gold.".*/


const locations = [
    {
      name: "town square",
      "button text": ["Go to store", "Go to cave", "Fight dragon"],
      "button functions": [goStore, goCave, fightDragon],
      text: "You are in the town square. You see a sign that says \"Store\"."
    },
    {
      name: "store",
      "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
      "button functions": [buyHealth, buyWeapon, goTown],
      text: "You enter the store."
    },
    {
      name: "cave",
      "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
      "button functions": [fightSlime, fightBeast, goTown],
      text: "You enter the cave. You see some monsters."
    },
    {
      name: "fight",
      "button text": ["Attack", "Dodge", "Run"],
      "button functions": [attack, dodge, goTown],
      text: "You are fighting a monster."
    },
    {name: "kill monster",
      "button text": ["Go to town square", "Go to town square", "Go to town square"],
      "button functions": [goTown, goTown, goTown],
      text: "The monster screams Arg! as it dies. You gain experience points and find gold."
    }
  ];