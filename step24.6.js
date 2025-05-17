/*Step 6
Remember that .getElementsByClassName() method returns an HTMLCollection, which is an array-like object of all the elements that have a matching class name. You can use the spread operator to convert it into an array.

Convert the document.getElementsByClassName() call to an array with the spread operator and assign it to a variable called inputValues.*/



const sortInputArray = (event) => {
    event.preventDefault();
  
    const inputValues =[...document.getElementsByClassName("values-dropdown")];
  }