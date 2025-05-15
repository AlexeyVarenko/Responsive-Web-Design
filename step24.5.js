/*Step 5
Back in your sortInputArray function, you need to get the values from your select elements. Since they all have the class values-dropdown, you can query them all at once.

Use document.getElementsByClassName() to get all the elements with this class by passing in the argument "values-dropdown". Assign that to an inputValues variable with const.*/



const sortInputArray = (event) => {
    event.preventDefault();
  const inputValues = document.getElementsByClassName("values-dropdown")
  
  }