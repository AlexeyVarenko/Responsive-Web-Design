/*Step 43
Add a new case for "defender" that checks if player.position equals "defender" following the same pattern as the previous step.*/



case "defender":
      setPlayerCards(players.filter((player) => player.position === "defender"));
      break;