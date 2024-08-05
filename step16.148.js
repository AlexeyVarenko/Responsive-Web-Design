/*Step 148
In the previous project, you learned how to work with the return keyword to return a value from a function like this:

Example Code
function add(num1, num2) {
  return num1 + num2;
}
Use the return keyword to return the value of hit at the end of the function.*/



function getMonsterAttackValue(level) {
    const hit = (level * 5) - (Math.floor(Math.random() * xp));
    console.log(hit);
    return hit;
  }