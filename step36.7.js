/*Step 7
A conditional statement is used to run code depending on a condition. It is composed of the if keyword, followed by a condition enclosed by parentheses, and a body enclosed by curly braces. Here's an example of an if statement:

Example Code
if (condition) {
  console.log("condition is truthy");
}
When condition is a truthy value (non-empty string, non-zero number, true, etc.) the code within the if statement's body is executed.

Below your variable, create an if statement that uses hasDeveloperJob as its condition. Within the body of your if statement, log "Timmy is employed as a developer." to the console.*/



const hasDeveloperJob = true;
if (hasDeveloperJob) {
  console.log("Timmy is employed as a developer.");
}