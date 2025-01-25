/*Step 34
You should display the Cancel and Discard buttons to the user only if there is some text present in the input fields.

To begin, within the closeTaskFormBtn event listener, create a formInputsContainValues variable to check if there is a value in the titleInput field or the dateInput field or the descriptionInput field.*/


closeTaskFormBtn.addEventListener("click", () => {
    confirmCloseDialog.showModal();
    const formInputsContainValues= titleInput.value || dateInput.value || descriptionInput.value;
  });