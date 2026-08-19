/*Step 4
Generally, it is good practice to validate your input(s) inside a function. Use a for loop to iterate through the crew array and check whether any member already has the same id as the input astronaut. If a duplicate is found, log the error message console.log("Duplicate ID: " + astronaut.id) and then call return to exit the function early.

Here is an example of this commonly used technique:

Example Code
if (existingMember.id === newMember.id) {
    console.log("Duplicate ID: " + newMember.id);
    return;
}*/



const squad = [];

const firstAstronaut = {
  id: 1,
  name: "Andy",
  role: "Commander",
  isEVAEligible: true,
  priority: 3
};

function addCrewMember(crew, astronaut) {
  for (let i = 0; i < crew.length; i++) {
    if (crew[i].id === astronaut.id) {
      console.log("Duplicate ID: " + astronaut.id);
      return;
    }
  }
  
}