/*Step 94
You also need to clear the output element's text. You can do this by setting the innerText property to an empty string.

The difference between innerText and innerHTML is that innerText will not render HTML elements, but will display the tags and content as raw text.*/


function clearForm() {
    const inputContainers = Array.from(document.querySelectorAll('.input-container'));
  
    for (const container of inputContainers) {
      container.innerHTML = '';
    }
  
    budgetNumberInput.value = '';
    output.innerText= "";
  }