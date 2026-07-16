/*Step 6
In this step, you will create a function to access the species property of an object.

Here is a small example of accessing a property from an object:

Example Code
const dog = {
  species: "Dog"
};
const getAnimalSpecies = (pet) => {
  return pet.species; // access species using dot notation
};
console.log(getAnimalSpecies(dog)); // Dog
In this example, the function takes an object as a parameter and returns its species property.

Now create a function called getSpecies.

The function should take one parameter named animal.

Return the species property of the animal using dot notation.

After creating the function, use console.log to call getSpecies(tiger) so you can see the result in the console.*/


const getSpecies = (animal) => {
  return animal.species;
};

console.log(getSpecies(tiger))