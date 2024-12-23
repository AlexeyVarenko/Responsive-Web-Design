/*Step 31
Next to the Nickname:  text, add an embedded expression that will show the player's nickname if they have one.

Use a ternary operator to check if nickname is not null. If the player has a nickname, display nickname otherwise display "N/A".*/



playerCards.innerHTML += arr.map(
    ({ name, position, number, isCaptain, nickname }) => {
     return `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname:${nickname ? nickname : "N/A"} </p>
        </div>
      `;
    }
  );