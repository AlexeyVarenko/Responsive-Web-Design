/*Step 95
To finish off this function, you need to restore the hide class to the output element. The classList property has an .add() method which is the opposite of the .remove() method. It accepts a string representing the class to add to the element.

Add the hide class to your output.*/


function clearForm() {
    const inputContainers = Array.from(document.querySelectorAll('.input-container'));
  
    for (const container of inputContainers) {
      container.innerHTML = '';
    }
  
    budgetNumberInput.value = '';
    output.innerText= "";
    output.classList("hide");
  }