/*Step 29
Below the paragraph element, add another paragraph element with the text Number:  and an embedded expression that contains the number parameter.*/



playerCards.innerHTML += arr.map(
    ({ name, position, number, isCaptain, nickname }) => {
     return `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
        </div>
      `;
    }
  );