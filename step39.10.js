/*Step 10
In this step, you will create a function that removes a property from an object.

Here is an example of removing a property using delete:

Example Code
const bird = {
  species: "Parrot",
  canFly: true
};

const removeFlight = (pet) => {
  delete pet.canFly; // remove property using delete keyword
  return pet; // return the updated object
};

console.log(removeFlight(bird));
// { species: "Parrot" }
In this example, the canFly property is removed from the bird object.

Now create a function called removeEndangeredStatus. The function should take one parameter named animal.

Inside the function, remove the isEndangered property from the animal object using the delete keyword. Return the updated animal object.

After creating the function, use console.log to call removeEndangeredStatus(tiger) so you can see the updated object in the console.*/




const removeEndangeredStatus = (animal) => {
  delete animal.isEndangered;
  return animal;
};

console.log(removeEndangeredStatus(tiger));
