/*Step 7
In this step, you will create a function to access the age property of an object.

Here is an example:

Example Code
const cat = {
  age: 3
};

const getAnimalAge = (pet) => {
  return pet.age; // access age using dot notation
};

console.log(getAnimalAge(cat)); // 3
In this example, the function takes an object as a parameter and returns its age property.

Now create a function called getAge.

The function should take one parameter named animal.

Return the age property of the animal using dot notation.

After creating the function, use console.log to call getAge(tiger) so you can see the result in the console.*/



const getAge = (animal) => {
  return animal.age;
};

console.log(getAge(tiger));