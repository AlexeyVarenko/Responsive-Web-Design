/*Step 27
The next step would be to display the word (Captain) next to the player if they are listed as a captain for the team.

Before the ${name} expression, add a new embedded expression. Inside that expression, use a ternary operator to check if isCaptain is true. If so, return "(Captain)" otherwise return an empty string.*/


playerCards.innerHTML += arr.map(
    ({ name, position, number, isCaptain, nickname }) => {
     return `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)":""} ${name}</h2>
        </div>
      `;
    }
  );