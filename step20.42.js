/*Step 42
Add a new case for "midfielder" that checks if player.position equals "midfielder" following the same pattern from the previous step.*/



case "midfielder":
      setPlayerCards(players.filter((player) => player.position === "midfielder"));
      break;