/*Step 32
The .map() method will return a new array of player-card items separated by commas.

To remove the commas between each player-card so it does not show up on screen, chain the .join() method to the .map() method. Pass an empty string as the argument for the .join() method.*/



playerCards.innerHTML += arr.map(
    ({ name, position, number, isCaptain, nickname }) => {
     return `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      `;
    }
  ).join("")