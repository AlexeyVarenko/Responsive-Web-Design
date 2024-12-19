/*Step 26
Inside the div, add an h2 element which contains the name parameter. Since you are working with template literals, you will need to use an embedded expression for the name parameter:

Example Code
${expression goes here}*/



playerCards.innerHTML += arr.map(
    ({ name, position, number, isCaptain, nickname }) => {
     return `
        <div class="player-card">
      <h2>${name}</h2>
        </div>
      `;
    }
  );