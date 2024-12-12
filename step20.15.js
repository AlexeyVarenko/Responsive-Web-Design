/*Step 15
In the last two steps, you have been accessing properties from the myFavoriteFootballTeam object using dot notation and assigning them to new const variables. But in JavaScript, there is an easier way to accomplish the same goal.

The object destructuring syntax allows you to unpack values from arrays and objects:

Example Code
const developerObj = {
  name: "Jessica Wilkins",
  isDeveloper: true
};

// Object destructuring
const { name, isDeveloper } = developerObj;
Rewrite the two lines of code below using the new destructuring syntax. Your answer should be one line of code.*/



const sport = myFavoriteFootballTeam.sport;
const team = myFavoriteFootballTeam.team;
const {sport, team}= myFavoriteFootballTeam;