/*Step 28
Below the h2 element, add a paragraph element with the text Position:  and an embedded expression that contains the position parameter.*/



playerCards.innerHTML += arr.map(
    ({ name, position, number, isCaptain, nickname }) => {
     return `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
        </div>
      `;
    }
  );