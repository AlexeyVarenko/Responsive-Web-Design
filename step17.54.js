/*Step 54
Your other bug occurs if you add a Breakfast entry, fill it in, then add a second Breakfast entry. You'll see that the values you added disappeared.

This is because you are updating innerHTML directly, which does not preserve your input content. Change your innerHTML assignment to use the insertAdjacentHTML() method of targetInputContainer instead. Do not pass any arguments yet.*/



function addEntry() {
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
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
    targetInputContainer.insertAdjacentHTML();
  }