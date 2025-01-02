/*Step 44
Add a new case for "goalkeeper" that checks if player.position equals "goalkeeper" following the same pattern as the previous step.*/



case "goalkeeper":
      setPlayerCards(
        players.filter((player) => player.position === "goalkeeper")
      );
      break;