/*Step 5
Push the astronaut object into the crew array and log Added ${astronaut.name} as ${astronaut.role} to the console. You can use either template literals or string concatenation for the log message.*/



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
    crew.push(astronaut);
  console.log(`Added ${astronaut.name} as ${astronaut.role}`);
}