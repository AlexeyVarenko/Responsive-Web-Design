/*Step 40
Before you can move onto the next case, you will need to add a break statement.

Below your setPlayerCards call, add a break statement.*/



switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
  break;
  }