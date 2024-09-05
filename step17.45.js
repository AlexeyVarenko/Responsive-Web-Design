/*Step 45
Now you need to build your dynamic HTML string to add to the webpage. Declare a new HTMLString variable, and assign it an empty template literal string.*/



function addEntry() {
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;
    const HTMLString = ``;
  }