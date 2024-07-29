/*Step 130
In your defeatMonster function, set gold equal to gold plus the monster's level times 6.7. Remember you can get the monster's level by using monsters[fighting].level.

Here is an example of setting num to num plus 5 * 8: num += 5 * 8. Use Math.floor() to round the result down.*/



function defeatMonster() {
    gold += Math.floor(monsters[fighting].level * 6.7)
   }