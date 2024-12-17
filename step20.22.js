/*Step 22
Function parameters can be initialized with default values. If a function is called without an argument, then the default value will be used:

Example Code
const greeting = (name = "Anonymous") => {
  return "Hello " + name;
} 

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
Add a new parameter to your setPlayerCards function called arr and assign it a default value of players. Remember that you destructured the players variable from the myFavoriteFootballTeam object on line 175.*/



const setPlayerCards = (arr=players) => {

};