/*Step 68
Call removeSpecialChars on the title, and description properties in your taskObj. For the id property, only call it on the titleInput.value part of the property value.

This will remove issues with broken task data.

With that you have completed the project.*/


const taskObj = {
    id: `${removeSpecialChars(titleInput.value).toLowerCase().split(" ").join("-")}-${Date.now()}`,
    title: removeSpecialChars(titleInput.value),
    date: dateInput.value,
    description: removeSpecialChars(descriptionInput.value),
  };