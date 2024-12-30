/*Step 39
Call the setPlayerCards function with an argument of players.filter().

Inside the filter method, add a callback function with a parameter called player and implicitly return player.nickname is not null.*/



switch (e.target.value) {
    case "nickname":
  setPlayerCards(players.filter(player=>player.nickname !== null))
  }