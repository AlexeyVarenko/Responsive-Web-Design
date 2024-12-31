/*Step 41
Next, add a case clause for "forward".

Inside that case, call the setPlayerCards function with an argument of players.filter().

Inside the filter() method, add a callback function with a parameter of player that will check if player.position equals "forward".

Lastly, add a break statement below the setPlayerCards function call.*/


case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;