/*Step 69
Your function needs to get the values from the entries the user has added.

Declare a breakfastNumberInputs variable, and give it the value of calling document.querySelectorAll() with the selector #breakfast input[type=number]. This will return any number inputs that are in the #breakfast element.*/



function calculateCalories(e) {
    e.preventDefault();
    isError = false;
    const breakfastNumberInputs=document.querySelectorAll("#breakfast input[type=number]")
  
  }