/*Step 12
A conditional statement can have an else clause, which runs code when the if condition is falsy. Here's an example of an if...else statement:

Example Code
if (condition) {
  console.log("condition is truthy");
} else {
  console.log("condition is falsy");
}
Add an else clause to the existing if statement. Inside the body of your else clause, log "Timmy is not old enough to drive." to the console.*/



const hasDeveloperJob = true;

if (hasDeveloperJob) {
  console.log("Timmy is employed as a developer.");
}

const isTimmyAGamer = false;

if (isTimmyAGamer) {
  console.log("Timmy loves to play World of Warcraft.");
}

const timmyAge = 18;

if (timmyAge >= 16) {
  console.log("Timmy is old enough to drive.");
} else {
  console.log("Timmy is not old enough to drive.");
}