/*Step 8
You should use console.log() to print out the result of inputValues. Write the code for this inside the sortInputArray function.

To see the logged inputValues array, click on the sort button and open up the console. You should see an array of strings like this:

Example Code
[ "8", "2", "4", "1", "3" ]
Before going further, make sure you observe the data type of the printed result in the console.

In the next step, you will convert those strings into numbers.*/



const sortInputArray = (event) => {
    event.preventDefault();
    const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => dropdown.value);
    console.log(inputValues)
  }