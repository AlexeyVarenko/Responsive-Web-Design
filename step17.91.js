/*Step 91
Remember that document.querySelectorAll returns a NodeList, which is array-like but is not an array. However, the Array object has a .from() method that accepts an array-like and returns an array. This is helpful when you want access to more robust array methods, which you will learn about in a future project.

The following example takes a NodeList of li elements and converts it to an array of li elements:

Example Code
<ul>
  <li>List 1</li>
  <li>List 2</li>
  <li>List 3</li>
</ul>
Example Code
const listItemsArray = Array.from(document.querySelectorAll('li'));

console.log(listItemsArray); //Output: (3) [li, li, li]
Wrap your inputContainers query selector in Array.from(). Do this on the same line as your declaration.*/



function clearForm() {
    const inputContainers =  Array.from(document.querySelectorAll('.input-container'));
  }