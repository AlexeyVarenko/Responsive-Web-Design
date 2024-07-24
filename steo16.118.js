/*Step 118
By default, the HTML element that shows the monster's stats has been hidden with CSS. When the player clicks the "Fight dragon" button, the monster's stats should be displayed. You can accomplish this by using the style and display properties on the monsterStats element.

The style property is used to access the inline style of an element and the display property is used to set the visibility of an element.

Here is an example of how to update the display for a paragraph element:

Example Code
const paragraph = document.querySelector('p');
paragraph.style.display = 'block';
Display the monsterStats element by updating the display property of the style property to block.*/



function goFight() {
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    const monsterStats = document.querySelector('p');
    monsterStats.style.display = 'block';
  }