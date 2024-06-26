/*Step 50
If the property name (key) of an object has a space in it, you will need to use single or double quotes around the name.

Here is an example of an object with a property name that has a space:

Example Code
const spaceObj = {
  "Space Name": "Kirk",
};
If you tried to write a key without the quotes, it would throw an error:

Example Code
const spaceObj = {
  // Throws an error
  Space Name: "Kirk",
}; 

Add a new property with a key of "Number of legs" and value of 4 to the cat object.

Open up the console to see the output.*/



const cat = {
    name: "Whiskers",
    "Number of legs": 4,
  };