/*Step 53
Try adding a couple of entries to the Breakfast category, and you may notice some bugs! The first thing we need to fix is the entry counts – the first entry should have a count of 1, not 0.

This bug occurs because you are querying for input[type="text"] elements before adding the new entry to the page. To fix this, update your entryNumber variable to be the value of the length of the query plus 1. Add this on your declaration line, not in your template strings.*/


function addEntry() {
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length+1;
    const HTMLString = `
    <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input
      type="number"
      min="0"
      id="${entryDropdown.value}-${entryNumber}-calories"
      placeholder="Calories"
    />`;
    targetInputContainer.innerHTML += HTMLString;
  }