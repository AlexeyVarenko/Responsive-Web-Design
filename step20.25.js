/*Step 25
Inside the body of the callback function, you will need to return a template literal `` which will contain the HTML content for the player cards.

Inside the template literals, add an empty div with a class of "player-card".*/



playerCards.innerHTML += arr.map(
    ({ name, position, number, isCaptain, nickname }) => {
     return `<div class="player-card"></div>`
    }
  );