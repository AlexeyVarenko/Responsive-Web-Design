/*Step 153
The player should hit if either Math.random() > .2 or if the player's health is less than 20.

At the end of your return statement, use the logical OR operator || and check if health is less than 20.

The logical OR operator will use the first value if it is truthy – that is, anything apart from NaN, null, undefined, 0, -0, 0n, "", and false. Otherwise, it will use the second value.

For example: num < 10 || num > 20.*/



function isMonsterHit() {
    return Math.random() > .2 || health<20;
    
  }