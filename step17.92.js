/*Step 92
It is time for another loop. Create a for...of loop with a variable called container to iterate through the inputContainers array.

Inside the loop, set the innerHTML property of the container to an empty string. This will clear all of the contents of that input container.*/



function clearForm() {
    const inputContainers = Array.from(document.querySelectorAll('.input-container'));
    for (const container of inputContainers){
      container.innerHTML=''
    }
  
  }