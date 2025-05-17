/*Step 7
You need to get the values from your select elements. These values will currently be strings and you will convert them into numbers.

Use the map function to iterate over the array. Pass a callback function to map that takes a dropdown parameter and returns dropdown.value.*/



const sortInputArray = (event) => {
    event.preventDefault();
  
    const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown)=>dropdown.value);
  }