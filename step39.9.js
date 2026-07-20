/*Step 9
In this step, you will create a function that updates a property of an object.

Here is an example of updating a property inside a function:

Example Code
const dog = {
  age: 4
};

const changeAge = (pet, updatedAge) => {
  pet.age = updatedAge; // update existing property using dot notation
  return pet; // return the updated object
};

console.log(changeAge(dog, 6)); // { age: 6 }
In this example, the age property is updated to a new value.

Now create a function called updateAge. The function should take two parameters: animal and newAge.

Inside the function, update the age property of the animal object to newAge. Return the updated animal object.

After creating the function, use console.log to call updateAge(elephant, 12) so you can see the updated elephant object in the console.*/



const updateAge = (animal, newAge) => {
  animal.age = newAge;
  return animal;
};

console.log(updateAge(elephant, 12));