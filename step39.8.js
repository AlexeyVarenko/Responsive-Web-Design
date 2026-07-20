/*Step 8
In this step, you will create a function that adds a new property to an object.

Here is an example of adding a property inside a function:

Example Code
const cat = {
  species: "Cat"
};

const addColor = (pet, color) => {
  pet.color = color; // add new property using dot notation
  return pet; // return the updated object
};

console.log(addColor(cat, "White")); 
// {
//   species: 'Cat',
//   color: 'White'
// }
In this example, the color property is added to the cat object.

Now create a function called addHabitat. The function should take two parameters: animal and habitat.

Inside the function, add a new property called habitat to the animal object. Set its value equal to the habitat parameter.

Return the updated animal object.

After creating the function, use console.log to call addHabitat(tiger, "Rainforest") so you can see the updated tiger object in the console.*/



const addHabitat = (animal, habitat) => {
  animal.habitat = habitat;
  return animal;
};

console.log(addHabitat(tiger, "Rainforest"));