/*Step 40
Now you need to target the .input-container element within the element that has your targetId. Declare a new targetInputContainer variable, and assign it the value of document.querySelector(). Use concatenation to separate targetId and '.input-container' with a space, and pass that string to querySelector().*/



function addEntry() {
    const targetId = '#' + entryDropdown.value;
    const targetInputContainer=document.querySelector(targetId+" .input-container")
  }