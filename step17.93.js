/*Step 93
After your loop completes, you need to clear the budgetNumberInput. Set the value property of budgetNumberInput to an empty string.*/


function clearForm() {
    const inputContainers = Array.from(document.querySelectorAll('.input-container'));
  
    for (const container of inputContainers) {
      container.innerHTML = '';
    }
    budgetNumberInput.value="";
  
  }