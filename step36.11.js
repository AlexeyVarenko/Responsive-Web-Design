/*Step 11
Comparison operators allow you to compare values and write more complex conditional statements.

if (today == birthday) {
  console.log("Happy Birthday!");
}
For example, the code above logs "Happy Birthday!" to the console only when the values of the variables today and birthday are equal.

Create a third if statement. For its condition, use the >= operator to check if timmyAge is greater than or equal to 16.

Inside the body of your new if statement, log "Timmy is old enough to drive." to the console.*/



const hasDeveloperJob = true;

if (hasDeveloperJob) {
  console.log("Timmy is employed as a developer.");
}

const isTimmyAGamer = false;

if (isTimmyAGamer) {
  console.log("Timmy loves to play World of Warcraft.");
}

const timmyAge = 18;

if (timmyAge>=16) {
  console.log("Timmy is old enough to drive.");
}