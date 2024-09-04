/*Step 42
Thanks to template literals, you actually don't need the targetId variable at all. Remove that variable, and update your template literal to replace targetId with entryDropdown.value – remember to add # before that, in the string.*/



function addEntry() {
  
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
}