/*Step 45
You need to wrap the text Store in double quotes. Because your string is already wrapped in double quotes, you'll need to escape the quotes around Store. You can escape them with a backslash \. Here is an example:

Example Code
const escapedString = "Naomi likes to play \"Zelda\" sometimes.";
Wrap the text Store in double quotes within your text.innerText line.*/



function goTown() {
    button1.innerText = "Go to store";
    button2.innerText = "Go to cave";
    button3.innerText = "Fight dragon";
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    text.innerText = "You are in the town square. You see a sign that says \"Store\".";
  }