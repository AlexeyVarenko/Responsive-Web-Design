/*Step 10
Now that you have confirmed the data type of the inputValues elements, remove your console.log() call.*/




const sortInputArray = (event) => {
    event.preventDefault();
    const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => Number(dropdown.value));
    
  }