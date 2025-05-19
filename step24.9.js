/*Step 9
Update your .map() callback to call the Number() function. Pass dropdown.value to that function call.

Open the Console tab to see that your inputValues is an array of numbers now.*/



const sortInputArray = (event) => {
    event.preventDefault();
    const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => Number(dropdown.value));
    console.log(inputValues);
  }